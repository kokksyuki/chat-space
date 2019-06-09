FactoryBot.define do

  factory :message do

    body  {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/image/test_image.png")}
    user
    group
  end
end