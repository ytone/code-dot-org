require 'test_helper'

class ScriptLevelsHelperTest < ActionView::TestCase

  include StagesHelper
  include LocaleHelper
  include ApplicationHelper
  include LevelsHelper

  test 'tracking_pixel_url' do
    # hoc
    assert_equal '//test.code.org/api/hour/begin_codeorg.png', tracking_pixel_url(Script.find(Script::HOC_ID))

    assert_equal '//test.code.org/api/hour/begin_frozen.png', tracking_pixel_url(Script.find_by_name('frozen'))
    assert_equal '//test.code.org/api/hour/begin_course4.png', tracking_pixel_url(Script.find_by_name('course4'))
  end

  test 'hoc_finish_url' do
    # hoc
    assert_equal '//test.code.org/api/hour/finish', hoc_finish_url(Script.find(Script::HOC_ID))

    assert_equal '//test.code.org/api/hour/finish/frozen', hoc_finish_url(Script.find_by_name('frozen'))
    assert_equal '//test.code.org/api/hour/finish/course4', hoc_finish_url(Script.find_by_name('course4'))
  end

  test 'script name instead of stage name in header for HOC' do
    self.stubs(:current_user).returns(nil)
    script_level = Script.find_by_name(Script::HOC_NAME).get_script_level_by_chapter 1
    assert_equal 'Hour of Code', header_progress(script_level)[:title]
  end

  test 'show stage name in header for multi-stage script' do
    self.stubs(:current_user).returns(nil)
    script = Script.find_by_name(Script::COURSE4_NAME)
    script_level = script.get_script_level_by_stage_and_position 3, 1
    assert_equal 'Stage 3: ' + I18n.t("data.script.name.#{script.name}.#{script_level.stage.name}"), header_progress(script_level)[:title]
  end

  test 'show stage position in header for default script' do
    self.stubs(:current_user).returns(nil)
    script_level = Script.twenty_hour_script.script_levels.fifth
    assert_equal 'Stage 2: The Maze', header_progress(script_level)[:title]
  end

end
