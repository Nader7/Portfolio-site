require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end
  test "should render index" do
    get posts_path(:project => "index"), xhr: true
    assert_template partial: "_index"
  end

  test "should render new" do
  	get new_post_path, xhr: true
    assert_template partial: "_new"
  end

  test "should create post" do
    assert_difference('Post.count') do
      post posts_url, params: { post: { title: "valid_title", text: "valid_text" } }
    end

    assert_response 200
  end

  test "should render show" do
    get post_path(@post), xhr: true
    assert_template partial: "_show"
  end

  test "should render edit" do
    get edit_post_path(@post), xhr: true
    assert_template partial: "_edit"
  end

  test "should update post" do
    patch post_url(@post), params: { post: { title: "valid_title", text: "valid_text" } }
    assert_template partial: "_posts_list"
  end
  
  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete post_url(@post)
    end

    assert_template partial: "_posts_list"
  end
end
