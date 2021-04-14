class Article < ApplicationRecord
  has_one_attached :image
  validates :title, presence: true
  validates :body, presence: true
  attribute :image_url

  def image_url
    Rails.application.routes.url_helpers.rails_representation_url(
      image.variant(resize_to_limit: [1200, 800]).processed, only_path: true
    )
  end
end
