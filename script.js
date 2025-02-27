let koshi=document.querySelector('#koshi');
let Madhesh=document.querySelector('#Madhesh');
let Bagmati=document.querySelector('#Bagmati');
let Gandaki=document.querySelector('#Gandaki');
let Lumbini=document.querySelector('#Lumbini');
let Karnali=document.querySelector('#Karnali');
let Sudurpashchim=document.querySelector('#Sudurpashchim');
let place1h2=document.querySelector('.place1 h2');
let place2h2=document.querySelector('.place2 h2');
let place3h2=document.querySelector('.place3 h2');
let place1p=document.querySelector('.place1 p');
let place2p=document.querySelector('.place2 p');
let place3p=document.querySelector('.place3 p');
let place1img=document.querySelector('.place1 img');
let place2img=document.querySelector('.place2 img');
let place3img=document.querySelector('.place3 img');

const defaultContent = {
    place1h2: place1h2.innerText,
    place1p: place1p.innerText,
    place1img: place1img.src,
    place2h2: place2h2.innerText,
    place2p: place2p.innerText,
    place2img: place2img.src,
    place3h2: place3h2.innerText,
    place3p: place3p.innerText,
    place3img: place3img.src
};
koshi.addEventListener('click', () => {
    place1h2.innerText = defaultContent.place1h2;
    place1p.innerText = defaultContent.place1p;
    place1img.src = defaultContent.place1img;
    place2h2.innerText = defaultContent.place2h2;
    place2p.innerText = defaultContent.place2p;
    place2img.src = defaultContent.place2img;
    place3h2.innerText = defaultContent.place3h2;
    place3p.innerText = defaultContent.place3p;
    place3img.src = defaultContent.place3img;
});
Madhesh.addEventListener('click', () => {
    place1img.src='imgs/Janaki-temple.jpg';
    place1h2.innerText='Janaki Temple';
    place1p.innerText='Janaki Temple, located in Janakpur, Dhanusha District, is a sacred Hindu temple dedicated to Goddess Sita, believed to be her birthplace and the site of her marriage to Lord Rama. Built in 1910 AD by Queen Vrisha Bhanu of Tikamgarh, the grand three-story structure showcases a blend of Mughal, Rajput, and Hindu architectural styles, featuring over 60 domes, intricate carvings, and vibrant paintings depicting scenes from the Ramayana. A major pilgrimage site, the temple attracts thousands of devotees, especially during Vivah Panchami, which celebrates Sita and Rama’s divine wedding. Nearby attractions include the Ram Mandir, Dhanushadham, and the Mithila Museum, offering visitors a glimpse into the region’s cultural and historical richness.';
    place2h2.innerText='Gadhimai Lake';
    place2img.src='imgs/gadimai.jpg';
    place2p.innerText='Gadhimai Lake, located in Bara District of Province 2, is a significant natural and cultural site associated with the famous Gadhimai Temple, dedicated to the goddess of power. The lake enhances the scenic beauty of the temple surroundings and serves as a peaceful retreat for visitors. It is particularly active during the grand Gadhimai Festival, held every five years, attracting millions of devotees from Nepal and India. The lake area also supports local biodiversity, providing a habitat for various bird species and aquatic life. With its religious importance and natural charm, Gadhimai Lake stands as a serene yet spiritually charged destination in Province 2.';
    place3h2.innerText='Chandranigahapur';
    place3img.src='imgs/chandra.jpg';
    place3p.innerText='Chandranigahapur, located in Rautahat District of Province 2, is a rapidly developing town surrounded by natural beauty and cultural heritage. The area is known for its lush green fields, serene landscapes, and peaceful environment, making it a great place for relaxation. Nearby, there are dense forests that provide a natural habitat for various wildlife species, offering visitors an opportunity to experience nature up close. Additionally, Chandranigahapur serves as a gateway to several cultural and religious sites, including temples and historical landmarks, reflecting the regions rich traditions. The towns growing infrastructure and natural surroundings make it an appealing destination for travelers seeking both comfort and nature.';
});
Bagmati.addEventListener('click', () => {
    place1img.src='imgs/ktm.jpg';
    place1h2.innerText='Kathmandu Valley';
    place1p.innerText='Bagmati Province, centered around the Kathmandu Valley, is a treasure trove of cultural, historical, and natural attractions. The valley is home to several UNESCO World Heritage Sites, including the iconic Swayambhunath Stupa, Pashupatinath Temple, and Boudhanath Stupa, which are key pilgrimage sites for Buddhists and Hindus. The Kathmandu, Bhaktapur, and Patan Durbar Squares showcase stunning Newar architecture, rich in history and culture. Beyond the city, Nagarkot offers mesmerizing views of the Himalayas, making it a popular spot for sunrise and sunset. Gosaikunda Lake and Langtang Valley provide serene trekking experiences surrounded by breathtaking landscapes. With its perfect blend of spirituality, heritage, and natural beauty, Bagmati Province is a must-visit destination in Nepal.';
    place2h2.innerText='Bhaktapur Durbar Square';
    place2img.src='imgs/bhakta.jpg';
    place2p.innerText='Bhaktapur Durbar Square is a historic and architectural gem located in the heart of Bhaktapur, a city in the Kathmandu Valley of Nepal. This UNESCO World Heritage Site is renowned for its well-preserved medieval architecture, rich culture, and ancient temples. The square is surrounded by numerous historical buildings, including the Vatsala Temple, Mahadev Temple, and the 55-Window Palace, which is famous for its intricate wooden carvings. The square also houses Bhairab Nath Temple, Siddhi Lakshmi Temple, and a large statue of King Bhupatindra Malla, the king who contributed significantly to the citys development.';
    place3h2.innerText='Langtang Valley';
    place3img.src='imgs/langtang.jpg';
    place3p.innerText='Langtang Valley, located in the northern part of Bagmati Province, is a stunning trekking destination within Langtang National Park. Known for its striking snow-capped peaks, including Langtang Lirung, the valley offers breathtaking mountain views and a rich mix of nature and culture. The trek takes visitors through beautiful forests, traditional Tamang villages, and alpine meadows. Along the way, trekkers can experience the unique Tibetan-influenced culture of the local Tamang people. The valley is also home to glaciers and offers a serene and peaceful environment. Langtang Valley is not only a popular trekking spot but also a spiritual place, with sacred sites like Kyanjin Gompa and several monasteries along the route.';
});

Gandaki.addEventListener('click', () => {
    place1img.src='imgs/pokahara.jpg';
    place1h2.innerText='Pokhara';
    place1p.innerText='Pokhara, located in Gandaki Province, is a beautiful city surrounded by the majestic Annapurna and Machapuchare mountains. Known as the gateway to the Annapurna region, it offers spectacular views of snow-capped peaks. Pokhara is famous for its serene Phewa Lake, where visitors can enjoy boating while admiring the mountains reflected in the water. The city is a hub for adventure activities like paragliding, trekking, and mountain biking. Its also home to the World Peace Pagoda, offering panoramic views of the valley and surrounding mountains. Pokhara serves as a starting point for treks such as the Annapurna Circuit and Mardi Himal Trek, making it a must-visit destination for nature lovers and adventure seekers.';
    place2h2.innerText='Annapurna Range';
    place2img.src='imgs/aanna.jpg';
    place2p.innerText='The Annapurna Range in Gandaki Province is one of the most popular and iconic mountain ranges in Nepal. Known for its stunning beauty and challenging trekking routes, the range is home to several peaks, including Annapurna I, the 10th highest peak in the world, and Machapuchare, often referred to as "Fishtail Mountain." The Annapurna Circuit trek, one of the most famous in the world, takes trekkers through diverse landscapes, from subtropical forests to alpine meadows, and offers breathtaking views of snow-capped peaks. The Annapurna Base Camp trek also attracts hikers, providing closer views of the Annapurna massif. The region is culturally rich, with opportunities to experience the lifestyle of local communities, such as Gurungs and Thakalis, making it a must-visit for adventure enthusiasts.';
    place3h2.innerText='Ghandruk';
    place3img.src='imgs/ghandruk.jpg';
    place3p.innerText='Ghandruk is a picturesque village located in the Kaski District of Gandaki Province, Nepal, nestled in the foothills of the Annapurna mountain range. It sits at an altitude of about 1,940 meters (6,365 feet) and offers breathtaking views of iconic peaks like Annapurna South, Machapuchare (Fishtail), and Hiunchuli. Ghandruk is inhabited by the Gurung people, known for their rich cultural traditions, and the village’s stone houses, narrow alleys, and terraced fields reflect the regions rural lifestyle Ghandruk is a popular stop for trekkers, especially those on the Annapurna Circuit and Annapurna Sanctuary treks. The village offers a peaceful environment with opportunities to experience traditional Gurung hospitality, culture, and cuisine. It also serves as a gateway to further Himalayan exploration.';
});
 
Lumbini.addEventListener('click', () => {
    place1img.src='imgs/lumbini.jpg';
    place1h2.innerText='Maya Devi Temple';
    place1p.innerText='The Maya Devi Temple, located in Lumbini, Nepal, is one of the most sacred Buddhist pilgrimage sites in the world. It is the exact birthplace of Lord Buddha, also known as Siddhartha Gautama. The temple houses an ancient stone marker that identifies the spot where Queen Maya Devi gave birth to Buddha in 563 BCE. Surrounding the temple are the Ashoka Pillar, erected by Emperor Ashoka in the 3rd century BCE, and the Sacred Pond (Puskarini), where Maya Devi is believed to have bathed before giving birth. A UNESCO World Heritage Site, Maya Devi Temple attracts thousands of pilgrims and tourists seeking spiritual and historical significance.';
    place2h2.innerText='Bardiya National Park';
    place2img.src='imgs/bardiya.jpg';
    place2p.innerText='Bardiya National Park, located in Lumbini Province, Nepal, is one of the largest and most well-preserved national parks in the country. Covering an area of 968 sq. km, it is home to a diverse range of wildlife, including Royal Bengal tigers, one-horned rhinoceroses, Asian elephants, gharials, leopards, and over 400 bird species. The park consists of dense forests, grasslands, and river ecosystems, making it an excellent destination for jungle safaris, bird-watching, and wildlife photography. The Karnali River, which flows through the park, is home to freshwater dolphins and crocodiles. Bardiya is less crowded than Chitwan National Park, offering a more untouched and serene wildlife experience for nature enthusiasts and adventure seekers.';
    place3h2.innerText='Tansen ';
    place3img.src='imgs/tansen.jpg';
    place3p.innerText='Tansen, a historic hill town in Palpa District of Lumbini Province, is known for its rich culture, scenic beauty, and historical significance. Situated at an altitude of 1,350 meters, it offers stunning views of the Himalayas and lush green hills. Tansen is famous for its Newari architecture, with traditional houses and temples adorning its narrow streets. Srinagar Hill, a popular viewpoint, provides breathtaking panoramas of the Annapurna and Dhaulagiri ranges. The town is also renowned for Dhaka fabric, used to make traditional Nepali clothing like topis and shawls. Additionally, the Rani Mahal, a palace on the Kali Gandaki River, adds to Tansen’s historical charm.';
});

Karnali.addEventListener('click', () => {
    place1img.src='imgs/rara.jpg';
    place1h2.innerText='Rara Lake';
    place1p.innerText='Rara Lake, the largest lake in Nepal, is located in Mugu District inside Rara National Park. Situated at an altitude of 2,990 meters, it covers 10.8 sq. km and is surrounded by dense pine, spruce, and rhododendron forests. The lake offers breathtaking views of the snow-capped Himalayas and reflects the pristine beauty of the region. It is home to rare wildlife, including the red panda, musk deer, and Himalayan black bear. The trek to Rara is an adventure in itself, taking travelers through remote villages and stunning landscapes. With its crystal-clear waters and peaceful surroundings, Rara is often called "the Queen of Lakes" and is a must-visit for nature lovers and adventure seekers';
    place2h2.innerText='Jumla';
    place2img.src='imgs/jumlaa.jpg';
    place2p.innerText='Jumla, a remote district in Karnali Province, is known for its organic apples, unique culture, and high-altitude farming. Located at around 2,514 meters, it is one of the highest rice-growing regions in the world, producing the famous Jumli red rice. The region is a gateway to Rara Lake and offers scenic trekking routes through alpine forests, rivers, and ancient villages. Jumla has a rich history as the former capital of the Khas Kingdom, which played a significant role in the development of the Nepali language. The district is also home to sacred Hindu sites like Chandannath Temple. With its untouched beauty, welcoming locals, and unique traditions, Jumla offers an authentic experience of Nepal’s rural lifestyle.';
    place3h2.innerText='Shey Phoksundo Lake ';
    place3img.src='imgs/shey.jpeg';
    place3p.innerText='Shey Phoksundo Lake, located in Dolpa District, is one of Nepal’s most beautiful and deepest lakes, lying at 3,611 meters within Shey Phoksundo National Park. The lake is famous for its striking turquoise-blue color, surrounded by barren cliffs and snow-capped mountains. It is a sacred site for Buddhists and followers of the Bon religion, with Shey Gompa, an ancient monastery, nearby. The area is home to rare wildlife, including snow leopards, blue sheep, and Himalayan marmots. The trek to Shey Phoksundo offers stunning views of waterfalls, forests, and Tibetan-influenced villages. The lake has no aquatic life, making its waters exceptionally clear and pure. It is a must-visit for trekkers and nature lovers seeking solitude and breathtaking landscapes.';
});

Sudurpashchim.addEventListener('click', () => {
    place1img.src='imgs/khaptap.jpg';
    place1h2.innerText='Khaptad National Park';
    place1p.innerText='Khaptad National Park is located in the far western region of Nepal, primarily in the Sudurpashchim Province. Covering an area of 225 sq. km, it is known for its scenic beauty, including lush forests, green meadows, and tranquil streams. The park is a spiritual hub, named after the famous sage Khaptad Baba, who meditated in the area. It is home to a rich variety of wildlife, including Himalayan black bears, leopards, deer, and over 200 species of birds. The park is also a biodiversity hotspot with diverse flora, such as medicinal herbs and wildflowers. A perfect destination for trekkers, nature lovers, and those seeking spiritual solace, Khaptad National Park offers peaceful retreats and panoramic views of the surrounding hills and mountains.';
    place2h2.innerText='Badimalika Temple';
    place2img.src='imgs/Badimalika.JPG';
    place2p.innerText='Badimalika Temple, located in the Bajura District of Sudurpashchim Province, is a significant Hindu pilgrimage site dedicated to Goddess Bhagwati. Situated at an altitude of about 4,200 meters, it is one of the highest temples in Nepal. The temple is famous for its stunning natural surroundings, including snow-capped mountains, green hills, and pristine landscapes. Devotees visit the temple, especially during festivals like Dashain, to seek blessings. The journey to Badimalika is an adventurous trek that takes visitors through remote villages and rugged terrain. It is considered a sacred place, rich in cultural heritage, offering a peaceful and spiritual retreat. The temple also provides breathtaking panoramic views of the surrounding Himalayan peaks, making it a must-visit destination.';
    place3h2.innerText='Api Base Camp ';
    place3img.src='imgs/api.jpg';
    place3p.innerText='Api Base Camp, located in Sudurpashchim Province, is a remote and stunning trekking destination at the foot of Mt. Api (7,132 meters), the westernmost peak in Nepal. The trek offers adventurers breathtaking views of pristine landscapes, alpine forests, and majestic snow-capped mountains. Along the route, trekkers pass through scenic villages and rugged terrains, making it an enriching journey for nature lovers and experienced trekkers. The camp serves as a starting point for climbers attempting to summit Mt. Api, though it is also a serene destination for those seeking solitude and natural beauty. The region is home to diverse wildlife, including blue sheep, Himalayan tahr, and snow leopards. Api Base Camp is a true hidden gem for adventurous travelers seeking an off-the-beaten-path experience.';
});