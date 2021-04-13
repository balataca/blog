require 'uri'
require 'faker'

images = [
  'https://www.firstclasswatches.co.uk/blog/wp-content/uploads/2016/10/DC3026A-SC-BK_night.jpg',
  'https://jortacticaloutdoor.com/wp-content/uploads/2020/02/INFANTRY-T19X.jpg',
  'https://watchesprime.com/wp-content/uploads/2019/05/1-88.jpg',
  'https://www.watchclub.com/upload/watches/originali/watch-club-tudor-oyster-chronograph-big-block-panda-ref-94210-13682-1.jpg',
  'https://luxurylaunches.com/wp-content/uploads/2017/09/rolex-watch.jpg',
  'https://www.dotbreitling.com/wp-content/uploads/2017/03/Red-Second-Hand-Breitling-Navitimer-1884-Replica-Watches.png',
  'https://hips.hearstapps.com/gearpatrol/gearpatrol/wp-content/uploads/2019/04/2-Military-Watches-in-the-Field-gear-patrol-lead-full.jpg',
  'https://www.matthewbaininc.com/assets/images/watches/Gigandet-Incab/gigandet-incab-z2.jpg',
  'https://www.stack3d.com/wp-content/uploads/2019/06/s-force-watches-5.jpg',
  'https://www.scottishwatches.co.uk/wp49/wp-content/uploads/2019/03/Hamtun.jpeg'
]

# Articles
images.each do |image|
  article = Article.create(
    title: Faker::Name.name,
    body: Faker::Lorem.paragraph(sentence_count: 2)
  )
  filename = File.basename(URI.parse(image).path)
  file = URI.open(image)
  
  article.image.attach(io: file, filename: filename)
  puts "Added new Article"
end

