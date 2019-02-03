require "application_system_test_case"

class PostsTest < ApplicationSystemTestCase
  setup do
    @post = posts(:one)
  end

  test "visiting the index" do
    visit home_path
    page.first(".button").click
    click_on "Database Management (Demo)"
    Capybara.default_max_wait_time #wait for ajax call to finish
    assert_selector "h1", text: "Projects"

  end

  #Due to ajax load times this test is very inconsistent when run locally
  test "creating a Post" do
    visit home_path
    page.first(".button").click
    click_on "Database Management (Demo)"
    click_on "New post"
    Capybara.default_max_wait_time 

    fill_in 'new_title', :with => 'valid_title'
    fill_in 'new_text', :with => 'valid_text'
    
    Capybara.default_max_wait_time 
    click_on "Create Post"
    assert_text "valid_title"
    assert_text "valid_text"
  end
end
