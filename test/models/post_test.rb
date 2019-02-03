require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test "create post" do
    post = Post.new
    assert_not post.save, "Empty post was saved"
    
    post.title = "valid_title"
    assert_not post.save, "Post with valid title but empty text was saved"

    post = Post.new
    post.text = "valid_text"
    assert_not post.save, "Post with valid text but empty title saved"

    post = Post.new
    post.text = "valid_text"
    post.title = "post"
    
    assert_not post.save, "Title with <5 characters was saved"

    post.title = "post5"
    assert post.save, "Valid post (>4 characters) was not saved"

    post.text = "ee"
    assert_not post.save, "Text with <4 characters was saved"

    post.text = "text"
    assert post.save, "Valid post (>3 characters) was not saved"
  end
end
