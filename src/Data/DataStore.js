import React, { createContext, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Hollywood from '../Pages/Hollywood'
import Food from '../Pages/Food'
import Fitness from '../Pages/Fitness'
import Technology from '../Pages/Technology'
import Discription from '../Pages/Discription'


export const Store = createContext();

 const DataStore=()=> {
    const [data,setData] =useState([
        {
           id:'1',
           heading:'OMG 2 vs Gadar 2 advance booking: Sunny Deol, Ameesha Patel film sells 45,000 tickets; leaves Akshay Kumar movie behind' ,
           subheading:'The Sunny Deol and Ameesha Patel-starrer commercial potboiler Gadar 2 has left the Akshay Kumar-starrer satirical comedy drama OMG 2 way behind in terms of advance bookings on day one. The Sunny Deol film sold a total of around 45,000 tickets across three national multiplex chains—PVR, Inox and Cinepolis—for the opening day alone as of Sunday morning. OMG 2, on the other hand, managed to sell only 7,700 tickets for the opening day across three national chains',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eTDfN.img?w=1920&h=1080&q=60&m=2&f=jpg',
           details:'While Gadar 2 is inching closer to selling 50,000 tickets across PVR, Inox and Cinepolis, OMG 2 has a long way ahead of it before the film achieves this feat. The Amit Rai directorial is likely to sell 50,000-60,000 tickets in the three multiplex chains by Thursday night, entertainment portal Bollywood Hungama reported.The upcoming Sunny Deol and Ameesha Patel film, on the other hand, is looking at closing its advance bookings on Thursday with more than 2 lakh ticket sales. With this response at the advance booking, Gadar 2 is likely to log in an opening of around Rs 20 crore. OMG 2 is centered on Kanti Sharan Mudgal whose son is blamed for immoral conduct and thrown out of school. A staunch devotee of Lord Shiva, Mudgal decides to take everyone responsible for his son’s plight to the court of law. The film, directed by Amit Rai, features Akshay Kumar, Arun Govil, Pankaj Tripathi, Yami Gautam, and Pavan Malhotra in significant roles. Gadar 2, on the other hand, focuses on Tara Singh who travels to Pakistan to bring his son Charanjeet ‘Jeete’ Singh back. The film, directed by Amit Rai, is set in the backdrop of the 1971 Indo-Pakistan war. It features Sunny Deol, Ameesha Patel, Utkarsh Sharma, Manish Wadhwa, Gaurav Chopra, and Simrat Kaur in key roles.      ',
           categorey:'Bollywood',
           date:'02/Aug/2023'
        },
        {
           id:'2',
           heading:'Love blossoms between Vijay Deverakonda and Samantha in new "Kushi" poster as trailer date and length are unveiled' ,
           subheading:'The songs from "Kush" have already struck a chord with the audience, gaining widespread acclaim for their melodic compositions and captivating visuals. Fans are fervently hoping that the film will not only prove to be a delightful watch but also positively impact the careers of both Samantha and Vijay, who have already made significant strides in the industry.',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eTm6B.img?w=612&h=344&m=6',
           details:'The anticipation surrounding the upcoming romantic drama "Kushi" has reached its peak as lead actors Vijay Deverakonda and Samantha Ruth Prabhu"s scintillating chemistry has already captured the hearts of the audience through the films melodious songs. The excitement is further heightened as Vijay Deverakonda recently announced the release date of the films trailer, set to drop on August 9, much to the delight of eager fans.Directed by Shiva Nirvana, "Kushi" promises to be a heartwarming tale of love and companionship, and the reveal of the trailers runtime at 2 minutes and 41 seconds indicates that the sneak peek will provide a substantial glimpse into the films essence.To add to the excitement, Vijay Deverakonda shared a romantic poster on his Instagram account, featuring himself and Samantha in a captivating embrace. The caption accompanying the poster read,"Its here. This Aug 9th. 2 mins 41 secs of #KushiTrailer #Kushi Releasing worldwide Sept 1!" Samantha Ruth Prabhu also shared the same poster, amplifying the buzz and enthusiasm among fans.The much-anticipated film is slated for a worldwide release on September 1, this year. As admirers eagerly await the unveiling of the on-screen chemistry between Samantha and Vijay, its evident that the films release cannot come soon enough. While the duo had previously shared the screen in Nag Ashwins "Mahanati," "Kushi" marks the first time they will be seen together in substantial roles, adding to the allure of the project.',
           categorey:'Bollywood',
           date:'02/Aug/2023'
        },
        {
           id:'3',
           heading:'Gal Gadot on turning producer and actor for "Heart of Stone": Liked being involved...' ,
           subheading:'Gal Gadot, also known as everyones favourite Wonder Woman, is all set to conquer the silver screen yet again with her upcoming film "Heart of Stone". Also starring Alia Bhatt and Jamie Dornan, Gal takes on the challenging role of the films protagonist, along with that of a producer. The actress in an interview recorded before the SAG strike, mentioned that it is deeply fulfilling to be able to perform dual duties.',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eTm83.img?w=1920&h=1080&q=60&m=2&f=jpg',
           details:'Gal Gadot is not just the protagonist in "Heart of Stone" but the actress has also turned producer for the Netflix film. In one of her statements recorded in 2022 and early 2023 before the SAG strike, the Hollywood star shared, "Its really fulfilling to do both, because not only do you have input over the project as a whole, but your role in the film as well. It is really rewarding. I especially liked being involved in the story from the very beginning. It has made the role of Rachel Stone feel much more personal. You want your audiences to be visually interested. I like to think of going to the movies as an opportunity to experience interesting places. Not everyone gets to go to amazing places like Iceland, Italy, Portugal, the UK or Senegal. So beyond great action, you get to see these locations you may not otherwise experience." Gal Gadot and the "Heart of Stone" team aimed to create an immersive experience that transcends the boundaries of traditional spy films. She wanted to transport the audience to mesmerising places they might only dream of visiting. From the awe-inspiring landscapes of Iceland to the timeless charm of Italy, from the vibrant streets of Portugal to the grandeur of the UKs historic sites, and even the lively spirit of Senegal - each location became an integral part of the films narrative.',
           categorey:'Bollywood',
           date:'02/Aug/2023'
        },
        {
           id:'4',
           heading:'When RD Burman created this iconic song mid-air on Rajesh Khanna’s request' ,
           subheading:'Rahul Dev Burman, aka RD Burman, had a knack for brainstorming brilliant musical ideas at the most unexpected moments. A case in point is the timeless Hindi classic ‘Ye jo mohabbat hai’, which was created mid-air during a flight from Bombay to Delhi.',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eThb5.img?w=612&h=344&m=6&x=136&y=176&s=199&d=199',
           details:'RD Burman found himself on this flight with the eminent superstar of that era, Rajesh Khanna. The story behind this iconic song, vividly recounted in the book ‘R D Burman – The Prince of Music’, reveals how this enchanting melody was created thousands of feet above the ground. According to the author, Khagesh Dev Burman, Rajesh Khanna was feeling rather agitated and requested RD to soothe his nerves with a melody. RD readily accepted the challenge and crafted the melody that eventually evolved into the celebrated song ‘Ye jo mohabbat hai’, to the absolute delight of his fellow passengers.Rajesh Khanna was so entranced by the impromptu performance that he convinced his friend Shakti Samanta, the producer-director of the 1971 film ‘Kati Patang’, to make room for the song in the movie. This serendipitous series of events led to the song being included in the film, which was already in production. Consequently, ‘Ye jo mohabbat hai’ turned out to be a classic that resonated deeply with its listeners and swiftly became a fan favorite.However, despite the popularity of the song, Kishore Kumar, the playback singer, fell short of winning the Filmfare Best Singer Award. Instead, it was Manna Dey who received the accolade for his song ‘Ae Bhai Zara Dekh Ke Chal’ from the Raj Kapoor cult classic ‘Mera Naam Joker’.',
           categorey:'Bollywood',
           date:'02/Aug/2023'
        },
        {
           id:'5',
           heading:'EXCLUSIVE Interview! Naseeruddin Shah on Delhi Theatre Festival: ‘Theatre gives chance to work with likeminded people’' ,
           subheading:'As Delhi Theatre Festival kicked off with Naseeruddin Shah’s Ismat Apa Ke Naam, Firstpost’s Lachmi Deb Roy caught up with the actor for an exclusive interview. Directed by Naseeruddin Shah himself, the show was divided into three parts, three very fitting readings and acts of Ismat Apa’s gripping tales.',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1c1oiN.img?w=380&h=285&m=6&x=92&y=73&s=148&d=148',
           details:'What according to you is the best thing about theatres, the satisfaction as compared to films? Theatre is great fun; we don’t earn a lot from it but it gives us all a chance to work with likeminded people. Theatre is a learning ground and the family for all of us. Each time we performed there was something new and a unique thing about theatre that we make a direct contact with the audience. On The Delhi Theatre Festival coming back after three years how excited are you?People who love the theatre and work together, unite and come together and feed off each other’s experiences and see each other’s work and get stimulated by the interaction.',
           categorey:'Bollybood',
           date:'02/Aug/2023'
        },
        {
           id:'6',
           heading:'Gal Gadot calls co-star Alia Bhatt her "sister", says she is "super-ready" for Hollywood' ,
           subheading:'The Heart of Stone actor talks about her journey as an Israeli artiste making an impact in Hollywood, and her experience performing action sequences in the upcoming spy thriller',
           image:'https://image.khaleejtimes.com/?uuid=6b9c793d-3d7c-5af8-80cd-427eba01e201&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99813&x=0&y=0&width=900&height=506',
           details:'Gal Gadot has become inseparable from the character of Wonder Woman in the present day. But the trials and tribulations of making it to the top in such a competitive industry are only known to the Israeli actor. Starting from facing rejection in an audition for the Bond girl role in Quantum of Solace (2008), to ultimately etching her name in history with earning a star on the prestigious Hollywood Walk of Fame, Gal has reached great heights during the span of her remarkable career.Whats even more uncommon is her achievement in an unfamiliar countrys film industry, where she wasnt originally from. In that aspect, her journey is akin to her Heart of Stone co-star, Alia Bhatt. Alia, who embarked on her acting career in Bollywood with Karan Johars Student of the Year in 2012, has made remarkable progress over the course of a decade. Her most recent accomplishment involves her international debut, acting alongside Gal Gadot in the upcoming spy thriller Heart of Stone directed by Tom Harper.In an exclusive conversation with an Indian news outlet, Gal mentioned that observing Alia navigate the initial phases of Hollywood does evoke memories of her own struggles.“We share so much in common. From the very first time we met, I felt we connected. Not just because both of us are from different countries and English is not our native language and the culture we come from is very different, but she brings a lot of warmth with her ... You get what you see,” Gal was quoted as saying.',
           categorey:'Hollywood',
           date:'02/Aug/2023'
        },
        {
           id:'7',
           heading:'Sound of Freedom: Why a Hollywood movie on child sex trafficking has left Leftists and Liberals aghast' ,
           subheading:'ne would expect that all would welcome the news that a successful Hollywood movie on child sex trafficking succeeds in sensitizing people about the evil of pedophilia. Well, all except Leftists and Liberals. They are aghast that Sound of Freedom, the American action film about the heroism of a former US government agent’s crusade against sex traffickers in Colombia, has become a big grosser.',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eRbsw.img?w=380&h=285&m=6',
           details:'Directed and co-written by Alejandro Monteverde, it is the fictionalized version of the heroism of Tim Ballard, a former US government agent who crusaded against child sex traffickers in Colombia. The movie stars Jim Caviezel, Mira Sorvino, and Bill Camp.Much of the criticism of the movie emanates from the fact that Caviezel is a QAnon believer. According to BBC, “At its heart, QAnon is a wide-ranging, completely unfounded theory that says that [former US] President [Donald] Trump is waging a secret war against elite Satan-worshipping pedophiles in government, business and the media. QAnon believers have speculated that this fight will lead to a day of reckoning where prominent people such as former presidential candidate Hillary Clinton will be arrested and executed.” That a section of Trump supporters believe in QAnon has caught the imagination of Leftists and Liberals (There is little difference between the two groups these days). In fact, QAnon is one of the terms intellectuals use to demonize anyone they don’t like, the other terms being ‘far-Right’ and ‘alt-Right’: There is no such thing as the Right in the ideological spectrum these days, only far-Right and alt-Right.The situation is similar to the one that prevailed in India in the 1970s, the 1980s, and even the 1990s: Those who were disliked by the intellectual establishment were maligned as RSS sympathizers, as ‘knicker-wallahs,’ even if those people themselves despised the RSS!However, Liberals are not raving and ranting against Sound of Freedom just because of the protagonist’s belief; their depravity is far deeper and more insidious; it is unconscionable. For they have been imbibing the Left’s ideas on children and child sex—and all these ideas are, well… radical, in every possible sense of the word.',
           categorey:'Hollywood',
           date:'02/09/2023'
         },
        {
           id:'8',
           heading:'Hollywood Producer Nick Thurlow, Known For Oscar-winning Moonlight, Joins Mohanlal"s Vrushabha' ,
           subheading:'Vrushabha, directed by Nanda Kishore, is a Malayalam film to be released in pan-India and it features Mohanlal, Shanaya Kapoor and Zahrah S Khan in lead roles. It will now have Nick Thurlow as the executive producer.',
           image:'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-2023-08-08t170034.485-16914942423x2.jpg?impolicy=website&width=510&height=356',
           details:'Nick Thurlow is a prominent producer in the Hollywood film industry. He has produced and co-produced several Hollywood films, like Oscar-winning Moonlight, Three Billboards Outside Ebbing Missouri, The Kid and many.Nick Thurlow, shared his excitement, stating, “Vrushabha is my first Indian film and I’m very, very excited. As an executive producer, I will be looking into different aspects of filmmaking, including creativity. This is my first brush working in a multilingual film, and that too outside my country, and I am absolutely thrilled. Every film is a new experience for me, giving me something to learn, and with Vrushabha, I am sure the experience will be extraordinary."',
           categorey:'Hollywood',
           date:'02/09/2023'
        },
        {
           id:'9',
           heading:'Two recent Hollywood hits make their way to OTT platforms in India' ,
           subheading:'As a new week begins, movie enthusiasts have fresh options to explore, whether at theaters or on OTT platforms. Today, we’re excited to share news about two Hollywood movies that have recently taken the global box office by storm. Notably, both of these films are computer-animated marvels.',
           image:'https://cdn.123telugu.com/content/wp-content/uploads/2023/08/TSMB-Spider-Man.jpg',
           details:'First up is The Super Mario Bros. Movie, and the other is Spider-Man: Across the Spider-Verse. These films, which originally graced screens in the second quarter of 2023, are now available on Indian OTT platforms.You can catch The Super Mario Bros. Movie exclusively on Jio Cinema, with options to watch in either English or Hindi. On the other hand, Spider-Man: Across the Spider-Verse is ready to stream on Amazon Prime Video and BookMyShow Stream, offering a thrilling viewing experience.Unfortunately, one must pay a sum of Rs. 399 to watch the Spider-Man movie, available in ten Indian languages, including Telugu. Stay tuned for more OTT updates.',
           categorey:'Hollywood',
           date:'02/09/2023'
        },
        {
           id:'10',
           heading:'Hollywood’s math problem: Getting paid for streaming ‘hits’ first means identifying them' ,
           subheading:'Many issues divide studios and streamers from the striking talent guilds, but one key sticking point involves how writers and actors should be fairly compensated for their work in streaming. And a major complication there is that streaming success remains such an impenetrable formula, influenced by resistance to provide clear data and hard-to-measure factors that cloud what constitutes a “hit.”',
           image:'In an interesting piece for Bloomberg, Lucas Shaw observed that streaming services’ lack of transparency about viewership is less about hiding their hits than covering up their failures. Those companies, he noted, “are spending a lot of money on shows people aren’t watching,” which is almost certainly true.The problem with that is audience levels aren’t the only metric when weighing the value of streaming series. Because unlike the old TV math – people watch show + network sells ads = profit – there are all kinds of benefits a show or movie can yield, or not, if you think about streaming services as big box stores, where luring customers inside, and keeping them there, is as much the objective as what they buy while perusing the shelves.Parrot Analytics, the media consulting and measurement firm, touched on this in breaking down criteria that determine a streaming show’s worth, from attracting hard-to-reach audience segments (thus giving different family members an incentive to subscribe – and keep subscribing) to their “flywheel effects,” or those titles that “work best with one another to extend a user’s stay” by leading them to complementary programs.Another, less-discussed factor involves publicity, and how programs can serve as ambassadors to promote the service.Take “Stranger Things,” one of Netflix’s most popular series. Yet the actual viewership almost pales next to the volume of media coverage the nostalgic sci-fi show generates, offering the bonus of helping to keep Netflix top of mind even among those who don’t watch it.Similarly, “The Lord of the Rings: The Rings of Power” attracted a record audience for Amazon when the show premiered, only to see the heat surrounding it cool considerably. But beyond the eyeballs drawn to Prime Video, there were all those articles trumpeting its debut, even if many asked whether the prequel could possibly justify Amazon’s massive bet on it.',
           details:'',
           categorey:'Hollywood',
           date:'02/09/2023'
        },
        {
           id:'11',
           heading:'Meta begins blocking news in Canada' ,
           subheading:'Canada passed the Online News Act in June, joining a push by numerous governments to force big social media companies to compensate news organizations. The Canadian bill requires the platforms and search engines to negotiate with news publishers to license their content.',
           image:'https://img.etimg.com/thumb/msid-102383347,width-650,height-488,imgsize-15072,,resizemode-75/meta-says-it-removed-over-27-million-bad-content-on-facebook-instagram-in-india.jpg',
           details:'Meta, the company behind Facebook and Instagram, has started blocking news articles on its social networking services in Canada.he change, in response to a new law in Canada that requires tech companies to pay news outlets for using their content, will roll out "over the course of the next few weeks," Meta said in a blog post on Tuesday. Content posted on Facebook and Instagram by both local Canadian news outlets and international outlets will not be visible to Canadians using the platforms.Canada passed the Online News Act in June, joining a push by numerous governments to force big social media companies to compensate news organizations. The Canadian bill requires the platforms and search engines to negotiate with news publishers to license their content.Meta had previously signaled that it would block news access in response to the Canadian law. In a blog post, the company said the Online News Act "misrepresents the value news outlets receive when choosing to use our platforms.',
           categorey: 'Technology',
           date:'02/Aug/2023'
        },
        {
           id:'12',
           heading:'Meta might soon bring a web version of Threads as it struggles to retain users weeks after launch' ,
           subheading:'Meta is looking at adding more retention-driving hooks to entice users to return to the app, like making sure people who are on the Instagram app can see important Threads," Chief Product Officer Chris Cox had said at the time. ',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1f4Nok.img?w=612&h=344&m=6',
           details:'At the beginning of last month, Meta introduced Threads, a new text-based social media platform. The launch of Threads had been making headlines for quite some time and when the app finally launched, people were quite eager to give it a try.  By using their Instagram credentials, users can easily sign in to Threads and start sharing their thoughts with the world. This new app launched at a time when many were becoming disinterested in Twitter due to various alterations, including limiting user activity. Therefore, Threads was thought to be a potential substitute for Twitter, which has now been renamed as X.The app had a whopping 100 million sign-ups within 5 days of launch. Threads was also reported to be one of the fastest growing social media sites. However, a few weeks after its launch, reports had surfaced that Threads lost more than half of its subscribers. Reports also said that Meta is planning to add features to Threads in order to retain users.And as per fresh reports, a web version of the app might be launching soon. In addition to this, the company might also add search functionality in the app.According to a Reuters report, Threads is planning to add a mention button so that the users will be able to mention someones account in a Threads post without any hassle. In addition to this, the company will also be launching a web version of the app. Presently, Threads can be accessed only via your phone, through its app. The web-version is not there yet. However, people can still view a Threads post via web if they have the direct link. Launching a web version will mean that people will be able to log in to Threads via web too, just like they can do with Twitter. And this might prove to be beneficial for Meta as desktop users will directly experience Threads instead of picking up their phone to use the app. With that being said, nothing is certain for now and we must wait for an official announcement from Meta to see if the web version is being launched or not.Apart from this, the company is also looking to add search functionality in the coming weeks, the report added.   ',
           categorey:'Technology',
           date:'02/Aug/2023'
        },
        {
           id:'13',
           heading:'Samsung announces affordable Galaxy F34 5G priced at Rs 18,999' ,
           subheading:'Samsung democratises 120Hz AMOLED display technology with the launch of Galaxy F34.',
           image:'https://images.indianexpress.com/2023/08/samsung-galaxy-f34-1.jpg?w=640',
           details:'Samsung is adding a new phone to its popular F-series with the launch of the Galaxy F34. The phone packs class-leading features, which include a 120Hz AMOLED screen, a 6,000 mAh battery, and four years of promised software updates.Available in two colour options — Electric Black and Mystic Green, the smartphone comes in two storage variants. As an introductory offer, the base model with 6 GB RAM and 128 GB storage costs Rs 18,999, the 8 GB and 128 GB storage version is priced at Rs 20,999. HDFC bank card users can get a flat Rs 2,000 discount, which brings down the price of the phone to Rs 16,999.The Samsung Galaxy F34 is quite similar to the Galaxy M34 (review) that we recently reviewed. The device comes with a mid-sized 6.5-inch AMOLED screen with FHD+ resolution and 120Hz refresh rate, protected by Corning Gorilla Glass 5. Similarly, the smartphone is based on the in-house Exynos 1280 octa-core processor, paired with 6/8 GB RAM and 128 GB of internal storage.The triple camera array at the back consists of a 50 MP primary camera with OIS, an 8 MP ultra-wide angle lens, and a 2 MP macro lens. The smartphone also has a 13 MP selfie camera. This time around, Samsung has introduced a lot of camera features like Nightography for enhanced low light shots, and it even has a Fun mode with 16 in-built lens effects.The phone ships with Android 13-based OneUI 5 and the device is eligible to receive four years of software updates and five years of security updates. Besides, a 6,000 mAh battery fuels the device with support for 25W fast charging. However, the retail box of the phone only includes a cable and the charger has to be bought separately.The launch of the Galaxy F34 comes at a time when Samsung is facing still competition from Chinese smartphone players. According to the latest IDC report, Samsung is the second biggest smartphone brand in India with a 15.7 per cent market share. The company has been maintaining this momentum for the last few quatres with the launch of entry-level, mid-range, and high-end smartphones.',
           categorey:'Technology',
           date:'02/Aug/2023'
        },
        {
           id:'14',
           heading:'Apple files patent for headset you can insert your iPhone into' ,
           subheading:'Apple has patented a simple VR device that can use your phone as the main screen. Is a cheaper Vision Pro in the works?',
           image:'https://images.indianexpress.com/2023/08/apple-vision-pro-featured-1.jpg?w=640',
           details:'Apple has recently filed a patent for a simple head-mounted display that you can insert your iPhone into. While the device is yet to move beyond the patent stage, it could one day offer a cheaper and easier way to experience VR than the upcoming Apple Vision Pro, which costs a whopping $3,499.The patent, which is the 17th one of its kind, describes a pair of glasses that can hold your phone in front of your eyes. The phone then acts as the main screen, displaying VR content. This is similar to how Samsung’s Gear VR works, although Apple did file patents for this concept long before Gear VR was launched.But Apple’s device is not just a glorified phone holder. It also has some interesting features that could make it more versatile and user-friendly. For example, it could come with a remote control that lets you change what you see on the screen, or a touch sensor that lets you adjust the volume by sliding your finger on the glasses.Another proposed feature is the external viewing mode, which allows you to see the real world through the glasses. This could solve one of the main problems of VR and AR: feeling isolated from your surroundings. The Apple Vision Pro also has this feature, but it uses advanced cameras and sensors to create a realistic view of the environment.',
           categorey:'Technology',
           date:'02/Aug/2023'
        },
        {
           id:'15',
           heading:'The Overuse Of Gadgets In Kids: A Significant Parenting Challenge' ,
           subheading:'Currently, children spend a significant amount of time indoors, engrossed in mobile games and electronic devices. They have fewer opportunities to engage in outdoor activities.',
           image:'https://menafn.com/updates/pr/2023-08/08/TNN_4f907image_story.jpg',
           details:'I recall my own childhood, which was different from the experiences of today"s kids. Unlike the present generation, we didn"t have easy access to gadgets like smartphones, laptops, and social media. These resources offer the new generation exposure to novel ideas, concepts, languages, and skills.However, the blessings of this interconnected world come with struggles and challenges. As educators and parents, it"s crucial to acknowledge these unique issues. Despite the benefits, we must recognize the problems our children face.Today, it"s common to see children constantly glued to their mobile phones. Ensuring their safe and responsible gadget usage is essential. It"s vital that they also have opportunities for exploring the physical world and engaging in outdoor activities. Each child is unique, and what suits one might not suit another.Let"s not ignore the adverse effects of gadget use, including eye strain, sleep disturbances, delayed development, and social isolation. Excessive reliance on technology hinders social development, limiting communication skills and relationship-building.',
           categorey:'Technology',
           date:'02/Aug/2023'
        },
        {
           id:'16',
           heading:'Malaika Arora Starts Off The Week By Showing The Right Way Of "Finding Your Balance" Through Yoga, Check Out' ,
           subheading:'Malaika often drops messages in the form of photo captions in order to encourage her fans to take the practice of yoga seriously and not give up',
           image:'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-36-1-16914729813x2.png?impolicy=website&width=510&height=356',
           details:'Malaika Arora is a true blue fitness icon who simply bewilders all with her dedication and love towards the practice of yoga. Whether it is raining cats and dogs or there is just scorching heat, she fights it all to attend her regular yoga sessions and there is something to truly learn from her persistence. She keeps herself motivated no matter what and that is a very important learning in yoga.Every now and then Malaika takes to the Instagram account of her brand, Diva Yoga to share a message with her fans. These little messages are extremely motivating and just go on the prove the fact that the actress has learnt as much as possible when it comes to yoga and wants her fans and followers to take cues too.Malaika writes, “Hello Divas, how are we doing today? Every time you step on the mat, you inhale serenity and exhale chaos. In this transformative journey allow yoga to guide you to achieve equilibrium. Let your practice be your sanctuary to find your balance." The actress notes down really important points that one must always remember when getting into the practice of yoga.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'17',
           heading:'World Breastfeeding Week: Common Issues Mothers Face During Breastfeeding' ,
           subheading:'Breastfeeding is a beautiful and natural bonding experience, but it comes with its share of challenges',
           image:'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-2023-08-01t125010.691-16908744403x2.jpg?impolicy=website&width=510&height=356',
           details:'Breastfeeding brings numerous benefits, yet mothers often encounter challenges. From sore nipples and engorgement to low milk supply and latch difficulties, these common issues can create frustration. Understanding and addressing these hurdles are essential for a successful and fulfilling breastfeeding experience for both mother and baby.“Breastfeeding presents several common challenges that mothers often encounter, requiring careful attention to ensure a positive experience for both mother and baby. One significant issue is the lack of support, while normal delivery enables easier milk flow, cesarean delivery may delay milk production by 24-36 hours, coupled with the mother’s post-surgery recovery and discomfort. Family support during this critical period is important, allowing the mother to rest adequately and ensuring she can breastfeed every 2 hours without unnecessary strain,” says Dr Nivedita Kaul, Lead Consultant, Dept of Obstetrics & Gynaecology at the CK Birla Hospital (R), Delhi.Secondly, inadequate milk supply is another concern raised by many mothers. Proper nutrition, starting from pregnancy, plays a crucial role in preparing for breastfeeding. “A well-balanced diet rich in protein and calcium is essential. Hydration is equally vital, with breastfeeding mothers needing to drink at least 2 litres of water daily to maintain milk production,” adds Dr Kaul.Thirdly, breast engorgement is a distressing issue that arises from excessive milk production. It leads to heaviness, pain, and redness in the breast, and if not addressed promptly, may even cause fever. Dr Kaul states, “It is crucial to educate mothers on emptying their breasts adequately during breastfeeding and seeking immediate attention for engorgement. The support of a family member or lactation expert can be immensely valuable during this time.”Sore nipples are yet another challenge faced by breastfeeding mothers. “Aggressive sucking or biting from the baby can cause painful cuts and soreness. To alleviate this, mothers can use nipple ointments, or shields, or opt for manual expression of milk to provide the nipples with some rest,” explains Dr Kaul.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'18',
           heading:'Planks and wall sits are best for lowering blood pressure – here are six more reasons they’re such great exercises' ,
           subheading:'Isometric exercise can be performed pretty well anywhere since they only use your body weight to challenge your muscles.',
           image:'https://images.theconversation.com/files/541216/original/file-20230804-15-p7nvgb.jpg?ixlib=rb-1.1.0&rect=1365%2C0%2C3461%2C2532&q=45&auto=format&w=926&fit=clip',
           details:'Isometric exercise can be performed pretty well anywhere since they only use your body weight to challenge your muscles.This kind of “isometric” exercise involves contracting a specific muscle or muscle group and holding it so the length of the muscle doesn’t change throughout the exercise.But lower blood pressure is only one of the benefits of doing this type of exercise.Jamie’s recent work looked at 270 randomised controlled trials involving a total of over 15,000 participants. It found that the best way to lower blood pressure was to perform an average of three isometric sessions per week.Each sessions consisted of four two-minute bouts of isometric exercises, with a one-to-four minute rest period between each. The resulting blood pressure reduction was comparable to that seen in people taking standard blood pressure medication.Jamie’s research group has also shown that isometric exercise improves the function, structure and mechanics of our heart, the health of our vascular system and the performance of our autonomic nervous system. All of these changes are important for good cardiovascular health and lower risk of disease.Although it’s a complicated area of science, the reason isometrics may be so effective for our cardiovascular health is due to the unique nature of holding a static muscle contraction. This compresses the blood vessels – and then on release of the isometric hold, leads to greater blood flow to the previously compressed vessels.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'19',
           heading:'Fitness: Fewer than 5,000 steps a day enough to boost health - study' ,
           subheading:'It has long been touted that 10,000 steps a day is the magic number you need to stay fit and healthy - but a new study shows fewer than 5,000 may be enough to see a benefit.',
           image:'https://images.theconversation.com/files/540724/original/file-20230802-25-zuhqu8.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5751%2C3837&q=45&auto=format&w=926&fit=clip',
           details:'The analysis of more than 226,000 people around the world showed 4,000 was enough to start reducing the risk of dying prematurely of any cause.Just over 2,300 is enough to benefit the heart and blood vessels.The more you do, the more health benefits are seen, researchers said.Every extra 1,000 steps beyond the 4,000 reduced the risk of dying early by 15% up to 20,000 steps.The team from the Medical University of Lodz in Poland and Johns Hopkins University School of Medicine in the US found the walking benefits applied to all genders and ages, regardless of where they lived.However, the biggest benefits were seen among the under-60s.Prof Maciej Banach, from the Lodz university, said that while the number of advanced drugs for treatment was growing, they were not the only answer."I believe we should always emphasise that lifestyle changes, including diet and exercise, which was a main hero of our analysis, might be at least as, or even more, effective in reducing cardiovascular risk and prolonging lives," he said.According to World Health Organization data, insufficient physical activity is responsible for 3.2 million deaths each year - the fourth most frequent cause worldwide.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'20',
           heading:'How to train your body for hot weather if you are active or work outdoors' ,
           subheading:'Global warming is making outdoor activities challenging — especially exercise. Indeed, we have a very small buffer to tolerate an increase in body heat. A rise in core temperature of only three degrees Celcius can be life-threatening, even for young healthy adults.',
           image:'https://images.theconversation.com/files/539663/original/file-20230726-17-ek3f5u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=503&fit=crop&dpr=1',
           details:'There are several ways to help prevent a perilous rise in core temperature while being physically active in the heat. There are numerous pre-cooling strategies that can help. Most practical of those is consuming a cold drink (or better yet, an ice slurry or slushie) prior to exercise. But “training” your body to cope better in the heat is the best defence.The strategy of heat training is particularly important for endurance athletes. Athletes who incorporate even a modest heat acclimating protocol before competing in the heat on average perform better and are less likely to require medical attention for heat-related injuries.However, given our warming environment, it may be time to consider heat training even for non-athletes, especially for people working outdoors.While heat acclimation training is most often used by endurance athletes, it was first developed for underground gold mine workers in the 1940s, who were exposed to environmental temperatures exceeding 50 C with humidity near 100 per cent.The benefits of heat acclimation are a growing area of research. In fact, the benefits seem to extend beyond being more heat tolerant, and into improvements for general cardiovascular health — known as heat therapy.Heat acclimatization and heat acclimation are slightly different: It is called heat acclimatization when it occurs naturally over a longer period, and heat acclimation when done “artificially” or purposefully over a shorter duration. Both forms confer benefits for heat tolerance, but they are not entirely synonymous.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'21',
           heading:'Planks vs push-ups: Know the differences, and which is better for beginners' ,
           subheading:'Planks are a form of isometric exercise that engages the core muscles, including the abdominals, buttocks, thighs, upper back and lower back. ',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bYI8g.img?w=612&h=340&m=6',
           details:'Planks and push-ups are two popular bodyweight exercises that mainly target the core muscle. Both can be done nearly anywhere as neither do they require any equipment, or much space. But is one exercise better than the other when it comes to achieving your fitness goals? To get the answers, we turned to an expert.According to Aminder Singh, a fitness expert and founder of Team Aminder, planks are a form of isometric exercise that engage the core muscles, including the abdominals, buttocks, thighs, upper back, and lower back. "By performing planks, you can strengthen multiple muscle groups simultaneously via contractions," he told indianexpress.com.On the other hand, pushups are a kind of calisthenics exercise that utilise your body weight as resistance. "They are useful for enhancing upper body strength," he added.Talking about the advantages of performing planks, Singh said that this exercise involves applying force without any movement, making it a versatile and beneficial exercise for individuals with varying fitness levels. "Another crucial advantage of planks is that there are numerous variations of them to suit individual abilities. Whether you are older, more fragile, or muscular, the plank can be customised to fulfill your specific needs and goals," he added.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'22',
           heading:'Deep brain stimulation could be beneficial for stroke patients' ,
           subheading:'A new study shows that deep brain stimulation could be beneficial for stroke patients undergoing rehabilitation, with improvements in motor function and impairment.',
           image:'https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/gettyimages-562878969.jpg?VersionId=WEwo1ViTqOF.jlQdfUQwf.Ylh8sQsfPr',
           details:'Stroke is the second commonest cause of death in India with one stroke-related death every four minutes. In fact, one in four people is in danger of stroke in their lifetime, according to the World Health Organisation.A new study, published in the journal Nature Medicine, has shown that brain wave stimulation could be beneficial for stroke patients, especially those undergoing rehabilitation.In the first-in-human trial of deep brain stimulation (DBS), scientists found that the research showed improvements in both motor function and impairment in 9 out of 12 participants.Known as the EDEN trial, this method stands for Electrical Stimulation of the Dentate Nucleus for Upper Extremity Hemiparesis Due to Ischemic Stroke.It targets the dentate nucleus in the brain responsible for controlling cognition, sensory functions, smooth working of voluntary movements, and language.The scientists from Cleveland Clinic found it safe and feasible for the brain while using this method."These are reassuring for patients as the participants in the study had been disabled for more than a year and, in some cases, three years after stroke. This gives us a potential opportunity for much needed improvements in rehabilitation in the chronic phases of stroke recovery," said Dr Machado, chair of Cleveland Clinic’s Neurological Institute.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'23',
           heading:'Does viral 75 Hard Challenge really work? Experts say unrealistic, unsustainable           ' ,
           subheading:'The 75 Hard Challenge, a rigorous self-improvement program gaining attention on social media, aims to transform participants" lives over 75 consecutive days.',
           image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/the-75-hard-challenge-encourages-consistency-in-health-and-fitness-routines--which-can-lead-to-visib-161743-16x9.jpg?VersionId=Nj0lJAMdDCBd2fDptUESgyvU2ilULDIw&size=690:388',
           details:'The 75 Hard Challenge is a self-improvement program designed by Andy Frisella, a renowned supplement CEO and speaker. This rigorous plan, which has gained significant attention on social media platforms, aims to transform participants" lives over a span of 75 consecutive days.The challenge involves five critical daily tasks: adhering to a diet, completing two 45-minute workouts (one outdoors), taking a progress picture, drinking around 4 litres of water, and reading 10 pages of a non-fiction book.The 75 Hard Challenge claims to offer several potential benefits, including improved confidence, self-esteem, perseverance, and overall mental toughness.It also encourages consistency in health and fitness routines, which can lead to visible physical results. However, the program"s extreme nature and lack of flexibility pose significant drawbacks.Its rigid rules, such as no cheat meals and the requirement for outdoor workouts regardless of weather conditions, can lead to burnout and make it difficult for participants to maintain these habits post-challenge.Its rigid rules, such as no cheat meals and the requirement for outdoor workouts regardless of weather conditions, can lead to burnout and make it difficult for participants to maintain these habits post-challenge.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'24',
           heading:'Stomach cancer awareness: Risks, treatments, and prevention' ,
           subheading:'Heres everything you need to know about the causes, treatment trends, and prevention strategies of stomach cancer. ',
           image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/stomach-cancer-awareness-learn-about-risks--treatments--and-prevention-172520-16x9.jpg?VersionId=waD4Jexr1qyEFnF0tSfL_5fb2cuqGw7P&size=690:388',
           details:'Stomach cancer, also known as gastric cancer, is a serious disease that affects the lining of the stomach. One significant risk factor is the Helicobacter pylori infection, which can damage the stomachs protective lining, leading to inflammation and cell damage.Unhealthy dietary habits, such as consuming smoked, salted, or pickled foods while neglecting fruits and vegetables, have also been linked to a higher risk of stomach cancer. Additionally, tobacco and alcohol use, a family history of gastrointestinal cancers, and previous stomach surgery for conditions like peptic ulcers may increase the risk.It often develops silently in its early stages, making it challenging to detect. However, common symptoms may include persistent indigestion, abdominal discomfort, unexplained weight loss, loss of appetite, nausea, and vomiting. It is very crucial to understand its causes, recent progress in treatment, and prevention strategies from the expert Dr R V Raghunandan, Senior Consultant Radiation Oncologist, HCG MNR Cancer Centre, Ongole.Stomach cancer develops when the cells lining the stomach undergo abnormal changes, leading to the growth of tumours',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'25',
           heading:'Fitness during younger days reduces cancer risk in old age' ,
           subheading:'Staying fit in your younger years can significantly lower the risk of developing various types of cancer later in life. A study found that good cardio-respiratory fitness was associated with a reduced risk of cancer in multiple organ systems.',
           image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/the-new-study-examined-the-link-between-aerobic-fitness-and-risk-of-subsequently-being-diagnosed-wit-164616-16x9.jpg?VersionId=B2DYpZsHydw4x4QEU5orPoOPce_daNBg&size=690:388',
           details:'Staying fit in your earlier years can significantly lower the risk of developing various types of cancer later in life, a recent study suggested.While earlier research suggests that physical activity can prevent certain types of cancer, the new study, published in the British Journal of Sports Medicine, examined the link between aerobic fitness and the risk of subsequently being diagnosed with 18 different types of cancer.The analyses are based on data from 1,078,000 men who underwent military conscription in Sweden between 1968 and 2005, with an average age of 18 years.The study showed that proper fitness at the time of conscription was followed by a lower risk of developing cancer of the head and neck, esophagus, stomach, pancreas, liver, colon, rectum, kidney, and lungs.The research revealed that individuals with good cardio-respiratory fitness had a remarkable 42 per cent reduced risk of lung cancer, 40 per cent reduced risk of liver cancer, and 39 per cent reduced risk of oesophageal cancer.However, the study did uncover a slight increase in the risk of prostate and skin cancers among those with higher cardio-respiratory fitness, potentially due to factors such as increased screening for prostate cancer and greater exposure to sunlight.',
           categorey:'Fitness',
           date:'02/Aug/2023'
        },
        {
           id:'26',
           heading:'Poha to Rawa Idly: Easy breakfast ideas for Monday morning rush hour' ,
           subheading:'Mondays are hard, rushing to work, and making breakfast for kids, combines with the sadness of the gone by weekend, makes it harder. We bring to you 5 easy breakfast recipes that will help you start your week at ease---by Amrita Ghosh',
           image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eSWFN.img?w=612&h=815&m=6',
           details:'Mondays are hard, rushing to work, making breakfast for kids, So, we bring to you 5 easy breakfast recipes that will help you start your week at ease. Flattened rice is mixed with peanuts, onion, coriander with little cooking which makes it an easy breakfast recipe. 20 minutes of cooking time makes it a great choice for breakfast.It can be made instantly as no fermentation or grinding is required. It is made with Semolina, some veggies and spices making it a healthy easy to make breakfast.'
           ,categorey:'Food',
           date:'02/Aug/2023'        
         },
        {
           id:'27',
           heading:'Millet: The Modern Superfood Finding Favor in India  ' ,
           subheading:'The Millet Movement is far more than just a culinary adventure; it is a sustainable journey towards awareness, and transformation of hearts and minds  ',
           image:'https://images.news18.com/ibnlive/uploads/2023/04/wp-image-848-16820783943x2.jpg?impolicy=website&width=510&height=356',
           details:'Millet, millet, everywhere – this paraphrasing of a Coleridge poem is only a slight exaggeration in India, a country which is one of the largest producers and exporters of the grain in the world. Millets are present in cuisines across the country, be it Punjab’s bajre di roti, mudde or hittu in Karnataka and Andhra Pradesh, ragi kali in Tamil Nadu, or jowar bhakri in Maharashtra.As health and wellness become paramount for Indians and sustainability becomes their guiding light, millets are increasingly emerging as a unique culinary alchemy that blend nutrition, tradition, and innovation into a single grain.“The history of millet in India reaches back to the dawn of civilisation on the subcontinent but, for the longest time, the grain was a victim of its own success. Being so widely available and affordable, it was relegated to the status of a meal for the masses, a mota anaaj (thick grain) which is not very suitable for consumption and was often replaced in diets by grains perceived to be ‘richer’, such as rice and wheat, whenever possible,” says Shilpa Vora, Chief R&D Officer, Marico Limited.In recent years, the grain category has registered a refreshing change of perception. Its value as a rich source of protein, fibre, micronutrients, essential amino acids, and phytochemicals is catching public attention. “The health benefits of a millet-based diet extend to blood sugar regulation, satiety, and improved heart health. Combined with being high in antioxidants, these factors are leading to a drastic re-evaluation of millets’ status and driving its awareness as a superfood,” adds Vora.',
           categorey:'Food',
           date:'02/Aug/2023'
        },
        {
         id:'28',
         heading:'Poha to Rawa Idly: Easy breakfast ideas for Monday morning rush hour' ,
         subheading:'Mondays are hard, rushing to work, and making breakfast for kids, combines with the sadness of the gone by weekend, makes it harder. We bring to you 5 easy breakfast recipes that will help you start your week at ease---by Amrita Ghosh',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eSWFN.img?w=612&h=815&m=6',
         details:'Mondays are hard, rushing to work, making breakfast for kids, So, we bring to you 5 easy breakfast recipes that will help you start your week at ease. Flattened rice is mixed with peanuts, onion, coriander with little cooking which makes it an easy breakfast recipe. 20 minutes of cooking time makes it a great choice for breakfast.It can be made instantly as no fermentation or grinding is required. It is made with Semolina, some veggies and spices making it a healthy easy to make breakfast.'
         ,categorey:'Food' ,
         date:'02/Aug/2023'
        },
        {
         id:'29',
         heading:'You will think twice before having a doughnut next time. Heres how sugar affects your skin' ,
         subheading:'Sugar accelerates skin ageing through glycation, causing collagen and elastin fibres to become stiff and less resilient.         ',
         image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/sugar-contributes-to-wrinkles-by-damaging-collagen-and-elastin-fibres-photo-courtesy-getty-015600-16x9.jpg?VersionId=ZIhLAByhIq4w_DWoLplkNyGnBhAif1r5&size=690:388',
         details:'We have a complicated relationship with sugar. The natural phenomenon of tilting towards a brownie after a heavy meal is indispensable, especially if you’re undergoing those indescribable monthly cravings.While our body does need sugar, the consumption of excessive refined or white sugar can pose detrimental effects on both our physical and mental well-being. Giving into cravings might not be such a bad idea once in a while, but daily consumption could be questionable.Skin expert Dr Geetika Mittal Gupta shared an Instagram post earlier today about the impact of sugar on our skin and how regular intake of it can cause some serious damage to the top layer.“Did you know that indulging in sweet treats can wreak havoc on your skin? Sugar can lead to various skin concerns that affect your complexion and overall skin health. Lets explore the impact and discover alternatives for a radiant, youthful glow,” she wrote in her post.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'30',
         heading:'How to make Galouti Kebabs, "one of the world’s best lamb dishes", at home. Recipe' ,
         subheading:'As Galouti Kebabs make it to the list of the worlds best lamb dishes, here is a recipe by Chef Ranveer Brar that you can try at home',
         image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/galouti-kebabs-have-made-it-to-taste-atlas-list-of-worlds-best-lamb-dishes-175105-16x9.jpg?VersionId=fphNzJlyvX5kQywZnZYmpe61EfA7i61a&size=690:388',
         details:'Galouti Kebabs, hailing from the exotic land of the nawabs Lucknow, has bagged a place amongst the worlds best lamb dishes.Taste Atlas, an experiential travel online guide for traditional food, released its list of the World’s Best 50 Lamb Dishes with the Lucknow delicacy occupying the 26th spot. A well-deserved accolade, we must add, given the undeniably delicious flavor and unique texture of these melt-in-your-mouth delicacies.While a visit to Lucknow is incomplete without devouring these delicious kebabs, you can also treat yourself to the subtle burst of flavours by making Galouti Kebabs at home. We bring you the recipe from Chef Ranveer Brar, who himself grew up in Lucknow.Grab your chef’s hat, ramp up your kitchen, and let the fragrant magic of Galouti Kebabs unfold.To make the fine mince, Chef Ranveer suggested combining 1kg of minced mutton with 200gm of lamb kidney fat. The mixture should be minced properly to ensure a perfectly-textured base for the kebabs.The secret to the dishs intriguing taste is "Galawat ka Masala." It includes a mix of exotic ingredients like betel leaf root, vetiver root, and wild berries along with everyday spices such as black cumin seeds, green cardamoms, and cloves. Fret not, if you can’t find these spices, as Chef Ranveer also suggested an easy way in the video.All of these are finely ground to create an aromatic, flavour-packed masala that lends depth and character to the kebabs.After this, the chef instructed home cooks to mix the minced meat with the prepared spice mix, ginger garlic juice, raw papaya paste, brown cashew paste, brown onion paste, kewra water, and rose water. Add a hint of red chilli for that extra kick, while a pinch of salt brings out all the exciting flavours. To allow for the mingling of these distinctive tastes, the meat mixture should be marinated for at least two hours, or even better, overnight.Finally, you just need to take a flat pan. Heat ghee on medium heat for shallow frying. Wet your hands with water and take a portion of the meat mixture and place it directly on the pan while shaping them into patties. Fry till a golden crust is formed on both sides and evenly cooked.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'31',
         heading:'Meghan is failed Hollywood dreams: Still wants to be a ‘global elite’' ,
         subheading:'We aren’t seeing much progress in Meghan’s Hollywood dreams even after she hiring a hotshot agent. The question is why is she still struggling? ',
         image:'https://images.firstpost.com/wp-content/uploads/2022/12/harrymeg.jpg?impolicy=website&width=640&height=363',
         details:'Things are not looking up for Harry and Meghan and they are completely failing as a brand. According to The Mirror report, it’s been suggested that Meghan Markle may be looking for a project to “solidify her position as a member of the global elite,” amid speculation over her career moving forward.Meghan rose to fame as an actor but has ventured away from acting in recent years. She’s since hosted her own podcast Archetypes and worked with her husband Prince Harry, 38, on projects like docuseries Harry & Meghan. In a big career move, Meghan signed with William Morris Endeavor (WME) which has also represented major stars including Adele, and tennis player Serena Williams.  PR expert Kieran Elsby has told that Meghan will be “a major coup for the agency”. “It is good business to have her on their roster. It is also good for Meghan having a prestige agency.“However, it’s been three months since the news broke and we’ve heard nothing since. This is a longer period of time than is typically expected for a new client to secure deals, which suggests that Meghan may be struggling to find her footing in Hollywood.”Amid all the speculation, communication expert Andy Barr told the Mirror: “The big question right now is, what will Megan do next and this is one of the reasons why she signed up to WME, the talent agency of the Hollywood elite.”“They will have been working away behind the scenes trying to find her a big ticket commercial or acting opportunity that will solidify her position as a member of the global elite,” he further commented about the possible plans.He suggested she could make a cameo on a potential Suits revival or reunion, saying: “I don’t think she will want to take a perceived backward step into a regular appearance on Suits, but maybe the odd cameo will happen. ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'32',
         heading:'he Hollywood strikes have hit the UK – and will hurt us all' ,
         subheading:'It’s easy to dismiss the Hollywood strikes as petulant luvvies terrified by the real world. When the likes of Brian Cox, Andy Serkis, Hayley Atwell, Oyelowo, Simon Pegg, Naomie Harris, Imelda Staunton, and Rob Delaney gather in Leicester Square to deliver blood curdling speeches in support of striking US actors, it can seem faintly ridiculous.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fqz0N.img?w=612&h=382&m=6',
         details:'And yet, the longer the strike goes on, the more harm it’s doing to the UK economy. Since the Screen Actors Guild walked out on July 14, joining the Writers Guild of America on the picket lines Hollywood – the world’s oldest and richest entertainment industry – has simply shut down. The money Los Angeles was expecting to pay for film and TV shows in 2023 was estimated at $240 billion – roughly the turnover of Google, almost twice the turnover of Ford, and four times the turnover of Boeing. With London the world’s third largest production hub, studios across the country and film and TV crews usually rated the best in the world in industry surveys, a chunk of that was headed our way.In 2022, according to figures from the BFI, inward investment from Hollywood on films and high-end television was £5.37 billion. LA studios spent £3.62 billion making TV over here whilst UK companies spent £632.7 million. With films, the US spent £1.74 billion in UK studios and locations whilst domestic films accounted for £173.6 million. In 2023, the rate of investment was similar in the first quarter of the year, suggesting that a second half shutdown will lose us almost £3 billion.The UK’s biggest studios host major US productions, all of which are now on hold. These include Deadpool 3, which has been filming at Pinewood, Tim Burton’s Beetlejuice sequel, the Brad Pitt Formula One drama Apex, the next Mission: Impossible film and the movie version of the hit musical Wicked, whose Yellow Brick Road set now lies in ruins in the Buckinghamshire countryside. TV shows in production and now under threat are second seasons of Andor and The Lord of the Rings: The Rings of Power and Eddie Redmayne’s The Day of the Jackal. For the electricians, labourers, camera crew and sound technicians, almost all of whom are freelance, this came as a sharp financial shock.  ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'33',
         heading:'Pamela Anderson Has Honest Take On Aging: Laughing At Myself When...' ,
         subheading:' Despite this, Pamela said to being in a "good place" at the moment. The "Baywatch" star, who became a global sex symbol in the 90s. ',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/qwvpdnozcsqgccaq_1692339773.jpeg',
         details:'Actress Pamela Anderson has embraced a fresh-faced beauty style in recent years, and she has found it to be really "freeing". Speaking to ELLE about her style, she explained, "I think we all start looking a little funny when we get older. And I am kind of laughing at myself when I look at the mirror. I go, Wow, this is really ... what is happening to me? It is a journey."Despite this, Pamela said to being in a "good place" at the moment. The "Baywatch" star, who became a global sex symbol in the 90s, shared, "I feel rooted for. I feel good. I am in a good place." Earlier this year, meanwhile, Pamela hit out at the makers of "Pam & Tommy", reports aceshowbiz.com. ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'34',
         heading:'Leonard Bernstein’s Children Defend Bradley Cooper’s Prosthetic Nose In Maestro' ,
         subheading:'Others have argued that transformation is an innate aspect of acting. Mark Harris, the Hollywood author and journalist, dismissed the controversy.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/bpty66z2cfpygiyf_1692328377.jpeg',
         details:'After Bradley Cooper’s prosthetic nose in the trailer for the upcoming Leonard Bernstein biopic “Maestro” stoked criticism of antisemitism, the conductor’s children have come to the defense of the actor.The teaser trailer for “Maestro,” which Cooper directs and stars in, debuted Tuesday and offered the first close-up look at Cooper’s makeup and performance as the great American composer and longtime music director of the New York Philharmonic. Cooper, who is not Jewish, dons a prosthetic nose as part of his transformation into Bernstein, who was.To some, Cooper’s nose in the trailer seemed like the kind of outsized caricature that has been a regular feature of Jewish portrayals throughout film history. The nonprofit group Stop Antisemitism called it “sickening.”“Hollywood cast Bradley Cooper — a non-Jew — to play Jewish legend Leonard Bernstein and stuck a disgusting exaggerated ‘Jew nose’ on him,” the group tweeted on X.Bernstein’s three children — Jamie, Alexander and Nina Bernstein — on Wednesday issued a statement supporting Cooper, saying they were “touched to the core to witness the depth of (Cooper’s) commitment, his loving embrace of our father’s music and the sheer open-hearted joy he brought to his exploration.”“It breaks our hearts to see any misrepresentations or misunderstandings of his efforts,” the statement said. “It happens to be true that Leonard Bernstein had a nice, big nose. Bradley chose to use makeup to amplify his resemblance, and we’re perfectly fine with that. We’re also certain that our dad would have been fine with it as well.”',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'35',
         heading:'Blue Beetle Director Ángel Manuel Soto Says DC Film Is A ‘love Letter To Our Ancestors’' ,
         subheading:'The director is promoting the film by himself due to the ongoing Hollywood strikes, which prohibit actors and screenwriters from promoting work.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/kwlp81xci7ktl24d_1692327709.jpeg',
         details:'Director Ángel Manuel Soto didn’t think too much about the “Latino side of things” when visually crafting DC’s “Blue Beetle” alongside Mexican screenwriter Gareth Dunnet-Alcocer.The film — starring “Cobra Kai’s” Xolo Maridueña as Jaime Reyes, aka Blue Beetle and DC’s first Latino superhero — oozes with Mexican references and elements of other Latin American cultures through almost every scene. Still, the Puerto Rican director says that all of this came naturally due to his and Dunnet-Alcocer’s backgrounds.“We never were like, ‘Okay, so how are we going to make this Latino?’ We cannot hide who we are. If we have the opportunity to tell our collective experiences because we are Latino, they’re going to come out Latino.”In “Blue Beetle,” Reyes finds himself in possession of an ancient scarab named Khaji Da made of alien biotechnology that chooses Reyes as its symbiotic host. In a hilarious scene, the scarab attaches itself to Reyes, transforming the hesitant young adult into a superhero.Soto is promoting the film by himself due to the ongoing Hollywood strikes, which prohibit actors and screenwriters from promoting work under television and theatrical contracts. Still, he made sure to bring his cast along for the ride via a culturally relevant white shirt with illustrations of his lead cast as Mexican Loteria characters during the Los Angeles leg of the press tour. The game is similar to bingo and is popular in Mexican and Mexican-American households.',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'36',
         heading:'Amitabh Bachchan ‘choked up’ after watching R Balki’s Chup, expressed himself by composing a melody: ‘It was the purest way somebody could…’' ,
         subheading:'R Balki revealed that Amitabh Bachchan watched Chup at 5.30 am and as soon as he finished watching the film, he dropped an "emotional" message to the filmmaker.',
         image:'https://images.indianexpress.com/2021/12/amitabh-bachchan-kaun-banega-crorepati.jpg?w=640',
         details:'Filmmaker R Balki considers himself lucky to have the admiration of Bollywood superstar Amitabh Bachchan. Balki, who has worked with his son Abhishek Bachchan in the upcoming movie Ghoomer, recently shared what Big B did after watching his last release, Chup: Revenge of an Artist. Starring Dulquer Salmaan, Pooja Bhatt, Sunny Deol and Shreya Dhanwanthary, Chup revolves around a cinema-obsessed serial killer who murders film criticsBalki revealed that senior Bachchan watched Chup at 5.30 am and as soon as he finished watching the film, he dropped an ’emotional’ message to the filmmaker. ‘I can’t talk, I am choking up. Can I meet you in the afternoon?’ Big B wrote to Balki.After seeing his message, the director went to meet him. Upon meeting Balki, Amitabh Bachchan told him “great things” about Chup. The filmmaker shared with Bollywood Spy, “Then he took me to a side room and told me, ‘I just didn’t want to speak to anybody and I just wanted to kind of absorb the movie. I just played this tune to myself, this is my feeling of Chup,’ and then he played that melody. I just took that from him. He asked me, ‘What are you going to do with it?’ I told him I would use it in the end credits. It was the purest way somebody could, without a single word, say something about a movie.”Balki feels Amitabh Bachchan is a “true artiste” and not just an actor. He added, “I was so touched with the purity of that thought. He is an artiste. More than The Amitabh Bachchan, the star, he is almost one of the purest artistes. He can switch between commercialism to scene in a flash but when it comes to the purity of a scene, he is one hundred percent there. He is more modern than any of the young guys. He gets it just like that. He reacts from the heart. He understands the nuances of the things of my own films better than me.”',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'37',
         heading:'Priyanka Chopra pulls out of her New York restaurant Sona, actor’s team says the business a ‘proud and significant moment in her career’' ,
         subheading:'Priyanka Chopra has stepped away from her restaurant business in New York. The restaurant Sona first started in 2021 amid Covid-19 restrictions.',
         image:'https://images.indianexpress.com/2023/07/Priyanka-4.jpg?w=640',
         details:'Priyanka Chopra, who started a restaurant named Sona in New York with Maneesh Goyal in 2021, is stepping away from the business, as per People magazine. Priyanka’s representatives shared a statement with the publication that stated, “Priyanka has stepped away from her partnership at Sona.” The restaurant will continue to stay open.The statement added that starting this business will always be a “proud and significant moment in her career” and said, “Bringing Sona to life will invariably be a proud and significant moment in her career. Priyanka has always endeavored to bring Indian culture to the fore through storytelling, whether that’s via engaging content for film and TV, or a beautifully plated dish that embodies the haute cuisine of India.”Goyal said that even though Priyanka has moved away from the business, “her fingerprints all over Sona.” He added, “While she will no longer be involved as a creative partner moving forward, she remains in the Sona family and we are excited for our respective new chapters ahead.”         ',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'38',
         heading:'Shah Rukh Khan thanks wife Gauri for raising their children ‘well’: ‘Suhana is so articulate…’' ,
         subheading:'Shah Rukh Khan thanks wife Gauri for raising their children ‘well’: ‘Suhana is so articulate…’',
         image:'https://images.indianexpress.com/2023/08/Untitled-design-91-3.jpg?w=640',
         details:'Shah Rukh Khan thanks wife Gauri for raising their children ‘well’: ‘Suhana is so articulate…’Suhana Khan, who is soon going to make her acting debut with Zoya Akhtar’s Archies, recently attended a book launch event, accompanied by her mother Gauri. Gauri on Wednesday posted a few pictures and videos from the event and recalled her first event with Shah Rukh, which was also a book launch.Suhana Khan, who is soon going to make her acting debut with Zoya Akhtar’s Archies, recently attended a book launch event, accompanied by her mother Gauri. Gauri on Wednesday posted a few pictures and videos from the event and recalled her first event with Shah Rukh, which was also a book launch.Shah Rukh retweeted Gauri’s post and wrote, “Yeah the circle of life is closing in for us with our babies helping us complete it. You’ve done so well with the three of them…educated them, taught them dignity & desire to share love…& Suhana is so articulate but the dimple is mine!!”',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'39',
         heading:'Alia Bhatt reveals she asked Ranbir Kapoor to check daughter Raha’s eyelashes after her birth: ‘When my daughter was born…’' ,
         subheading:'Alia Bhatt shared that she wanted her daughter, Raha, to have her husband Ranbir Kapoor"s beautiful eyelashes.',
         image:'https://images.indianexpress.com/2023/08/alia-1.jpg?w=640',
         details:'Fans couldn’t stop raving about Alia Bhatt’s look in her recently released film Rocky Aur Rani Kii Prem Kahaani and in a recent interview, the actor who is often complimented for her gorgeous looks, spoke about her make-up routine. The actor said that she doesn’t have great eyelashes but praised her husband, Ranbir Kapoor, for his beautiful long lashes. She revealed a lighthearted moment where, after the birth of their daughter, Raha, she asked Ranbir to check their daughter Raha’s eyelashes.In an interview with Vogue, Alia showed her everyday skin care and makeup routine. During the interview, Alia discussed her daughter Raha while curling her eyelashes. She said, “I don’t have lovely long lashes like my husband. He has got like beautiful long lashes. And then when my daughter was born, I was like, ‘Check her eyes. Does she have lovely long lashes?’ And she does. Touch wood.”It isn’t just Alia who is obsessed with Raha, Ananya Panday also can’t get over her cuteness. In a recent interview with Bollywood Life, when Ananya was asked what she would like to steal from Alia, she replied, “She has a beautiful daughter, Raha, who is just so adorable; obviously I don’t want to steal her, but I just cannot get over how adorable she is.During her conversation with Vogue, Alia shared a personal insight into her relationship with Ranbir. She mentioned that Ranbir appreciates her natural look and prefers her without a dark lip shade. She said, “After applying the lipstick, I rub it off because one thing my husband, who was also my boyfriend, when we go out at night, he’s like ‘wipe that off’ because he loves the natural colour of my lips.”',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'40',
         heading:'https://images.indianexpress.com/2023/08/alia-1.jpg?w=640' ,
         subheading:'John Travolta and Salman Khan attended an award ceremony in Riyadh in 2022. At the event, Salman had to introduce himself to the Hollywood star.',
         image:'https://images.indianexpress.com/2023/08/salman-john.jpg?w=640',
         details:'Actor Salman Khan is among the most popular Indian actors. He has a fan following of 45.2 million on Twitter and on Instagram, he is followed by 64.4 million people. But there is someone in the same profession as Salman, who didn’t recognise him when he met him at an awards ceremony. And, that is Hollywood star John Travolta.John Travolta and Salman attended an award ceremony in Riyadh in 2022. At the event, Salman, who sat beside John, had to introduce himself to him after probably praising him for his work.A viral video of the two actors from an award ceremony resurfaced on Reddit. It opens with Salman saying something to the Grease star in his ear and then saying “Amazinggg” loudly. He then introduces himself to John, “I work in the Indian film industry. My name is Salman Khan.” After the introduction, John gave a wide smile to Salman and shook hands with him.John Travolta is an American actor who started his acting career in the 1970s with the sitcom Welcome Back, Kotter. He went on to star in films like Carrie (1976), Saturday Night Fever (1977), Grease (1978), and Urban Cowboy (1980). Next, the actor will be seen alongside veteran actor Al Pacino and Viggo Mortensen in filmmaker-playwright David Mamet’s Assassination, a film about the murder of former US president John F. Kennedy.',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'41',
         heading:'Isro to hit brakes on Chandrayaan-3 mission' ,
         subheading:'"Chandrayaan-3"s Vikram lander is set to undergo a crucial deboosting maneuver on August 18 after being separated from the Propulsion Module earlier today. ',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fokpH.img?w=600&h=338&m=6/https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fow5P.img?w=600&h=338&m=6',
         details:'The Indian Space Research Organisation (ISRO) announced that the landing module, comprising the Vikram lander and Pragyan rover, has successfully separated from the propulsion module, marking a significant milestone in the mission.This maneuver will allow the Vikram lander to descend to a slightly lower orbit, preparing it for its final descent onto the lunar surface.The deboosting operation follows a series of successful maneuvers since the launch of Chandrayaan-3 on July 14, 2023. The spacecraft completed five Earth-bound maneuvers between July 15 and 25. Following this, ISRO carried out the trans-lunar injection on August 1, setting the spacecraft on a path towards the Moon, where it arrived on August 5.Once the deboosting maneuver is completed, a series of operations will be carried out to put Vikram in an orbit where the Perilune (closest point to Moon) is 30km and Apolune (farthest point from Moon) is 100km. This will set the stage for the most critical part of the landing - reducing the velocity of the lander from a 30km height to the final landing.The lander has been designed to handle multiple failures, including the malfunctioning of all sensors and even two of its engines. Despite these potential challenges, the lander is expected to make a soft landing, thanks to its robust design and the meticulous planning of the ISRO team.',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'42',
         heading:'U.S. Air Force picks startup to build blended-wing body prototype' ,
         subheading:'U.S. Air Force picks startup to build blended-wing body prototype',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fpfs4.img?w=1920&h=1080&q=60&m=2&f=jpg',
         details:'The aircraft is to be assembled by 2026 and flight testing will begin in 2027. The effort aims to mature BWB technology and demonstrate its capabilities, giving the department and commercial industry more options for future air platforms.With a design that differs from a traditional tube-and-wing aircraft, the BWB blends the aircraft body into its high-aspect-ratio wing, decreasing aerodynamic drag by at least 30 per cent and providing additional lift.This increased efficiency will enable extended range, more loiter time, and increased payload delivery efficiencies, capabilities that are vital to mitigating logistics risks."Blended wing body aircraft have the potential to significantly reduce fuel demand and increase global reach," said Secretary of the Air Force Frank Kendall. "Moving forces and cargo quickly, efficiently, and over long distances is a critical capability to enable national security strategy."Several military transport configurations are possible with the BWB. Together, these aircraft types account for approximately 60% of the Air Forces total annual jet fuel consumption. As outlined in the fiscal year 2023 National Defense Authorization Act, the Department of Defense plans to invest $235 million over the next four years to fast-track the development of this transformational dual-use technology, with additional private investment expected.         ',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'43',
         heading:'Does Poco M6 Pro 5G warrant an upgrade over Poco M5?' ,
         subheading:'The Poco M6 Pro 5G is an incremental update to the Poco M5. And in fact, at a starting price of Rs 10,999, which is Rs 1,500 more than the Poco M5 is starting price, the M6 Pro does bring some meaningful upgrades to the table, such as 5G, a newer chipset and a tweaked design. So, the question is — should you buy this new budget phone from Poco, or does it even warrant an upgrade over the Poco M5? Let me try to answer this for you.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1flMa5.img?w=612&h=344&m=6',
         details:'Design-wise, the Poco M6 Pro does a bunch of things right when compared to the Poco M5. Gone is the curved textured plastic back in favour of the premium glass rear, which is now flat. The raised camera island on the Poco M5 is now flush on the Poco M6 Pro, although the camera rings are slightly protruding. The Poco M6 Pro also features IP53 dust and splash resistance, something that is not there on the Poco M5.The side frame and button placements feel the same. However, the display now features a hole-punch design instead of the tear-drop notch, which is a welcome addition. And coming back to the buttons — they have superb tactile feedback, and the fingerprint reader is embedded in the power button. Fast and responsive, as one would expect from physical sensors. Other than this, the type-C port and single-speaker placement at the bottom remains the same. As well as the headphone jack and IR blaster at the top.Also note, the Poco M6 Pro features a hybrid SIM slot, which is good. However, in the budget segment, I was expecting to see dual SIM slots along with a dedicated slot for storage expansion. Overall, when it comes to the design, the Poco M6 Pro does not give you the feel that you are holding a budget phone. The build is solid, you get IP53 protection and the flat design plus the glass back does add up that bit of premiumness, which makes the phone feel more like a Rs 20,000 to Rs 25,000 device. And yeah, one more thing, why is not there a yellow colour Poco? Apart from the slight increase in size, i.e. from 6.58" on the Poco M5 to 6.79" on the Poco M6 Pro, the display specs on the newer model remain the same, i.e. you get an IPS LCD display with a 90Hz refresh rate, Gorilla Glass 3 protection, and slightly bumped up brightness from 500 nits on the M5 to 550 nits on the M6 Pro.  ',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'44',
         heading:'2023 Mercedes-Benz GLC review, first drive - The Equaliser' ,
         subheading:'The GLC has been a game changer for Mercedes especially in the luxury SUV segment, boasting of 13,000 plus customers and making it the best-selling luxury SUV for the brand.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1foDNh.img?w=612&h=344&m=6',
         details:'The SUV stands just after the E-Class as the company is highest selling model in India and there is good reason for it. A luxury SUV that is just about the right size to not seem like an initial move into the Mercedes family ala the GLA and not starting to get overly large ala the GLE, managing to fit into the urban space and still stand out while also being great for a multitude of lifestyles.This new, second generation of the GLC comes after an eight month hiatus from Mercedes India portfolio and Mercedes cites a substantial volume of demand from customers for the model in its absence. These potential customers for the GLC are now going to get a refreshed new look that is more rounded compared to the model it replaces. The design changes are more apparent in the LED headlamps, the new grille, the redesigned rear tail lamps and the general look of the new GLC which now appears softer yet, more stately. The new 19-inch wheels ups the aesthetics even further and that is a good thing as no AMG-line additions are currently on offer for the SUV. The SUV also sees an increase of 60mm in overall length including a 15mm increase in wheelbase, more on the benefits of it later.',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'45',
         heading:'Upcoming Tata Electric Cars Launching In India: Tata Curvv, Nexon EV Facelift And More' ,
         subheading:'Indian car market is progressing towards a future of electric vehicles. Contributing to the future the major auto manufacturers like Hyundai, Maruti Suzuki, Honda and Mahindra are planning on launching new electric cars in India',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fo6BD.img?w=1920&h=1080&q=60&m=2&f=jpg',
         details:'The modern sub-four-meter vehicle will be built on a modified version of the X1 platform and based on Tata is Gen-2 architecture. The car is anticipated to be released with a battery pack that will allow it to travel about 400 kilometres on a single charge. Tata Motors is anticipated to disclose the details of the vehicles specifications at the time of the introduction. However, the design of the car was revealed by the company last year in April.Tata Nexon EV currently sold in Prime and Max variants in India enjoys the title being the most popular electric vehicles in India. To reap the benefits of the success the company is planning to launch a facelift of the electric SUV. The test mules of the electric car has been spotted on multiple occasions. In the facelift version, the car will get multiple changes in its features along with a 10-inch infotainment system, new steering wheel and more.',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'46',
         heading:'Healthy Radish: Curated by Experts for Optimal Wellness' ,
         subheading:'Radishes are a rich source of antioxidants and minerals like calcium and potassium, these nutrients help in lowering blood pressure and reduce risks of chronic illnesses.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fncjI.img?w=612&h=304&m=6',
         details:'Radishes also help with the liver and stomach health, they detoxify and purifies the blood removing toxins and wastes in the blood.Radishes also stimulates skin beauty, raw radish helps in reducing skin disorders such as cutaneous eruptions and wrinkles because of the presence of antioxidants and flavonoids.When consumed in large amounts radishes can cause flatulence and cramps, they can also irritate the digestive tract.Radish may reduce the risk of cancer because of its content of sulphur compounds. Cruciferous vegetables contain a range of antioxidants, which may help prevent the cell damage.Radish may helps in weight loss. It is high in fiber and low in kilocalories. One cup of radish provides 16 kilocalories and about 1,6 grams of fiber.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'47',
         heading:'World Health Organisation Holds First Traditional Medicine Summit in Gujarat' ,
         subheading:'The World Health Organisation (WHO) is hosting its inaugural summit on traditional medicine Thursday, underscoring that therapies based on natural products offer viable alternative healthcare options when supported by scientific evidence.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fneRP.img?w=612&h=408&m=6',
         details:'The two-day WHO Traditional Medicine Global Summit starts today alongside a meeting of G20 health ministers in Gandhinagar, Gujarat.Prime Minister Narendra Modi, who is expected to address the WHO conference, has been an active proponent of the traditional way of life and yoga. The summit, set to become an annual event, follows the opening last year of a WHO Global Centre for Traditional Medicine, also in Gujarat. WHO Director-General Tedros Adhanom Ghebreyesus arrived in India on Wednesday to participate in a two-day summit being co-hosted by the Indian government, which holds the G20 presidency this year.Traditional medicines are a “first port of call for millions of people worldwide”, the UN health agency said. In a statement posted on social media platform X, WHO said it aims to bring evidence and scientific validation around traditional medicine so that millions of people around the world who use complementary and traditional medicine understand whether it’s safe and effective and are better protected.“When scientifically validated, traditional medicine has the potential to bridge access gaps for millions around the world. By access gaps, we mean that too many people still can’t afford or are unable to obtain the health care and tools that can keep them safe,” the statement added.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'48',
         heading:'Health Experts Reveal: The Benefits of Eating Summer Squash  ' ,
         subheading:'Summer squash contains about 87% water, and may help to keep the body hydrated.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fn7cn.img?w=612&h=304&m=6',
         details:'Summer squash contains a wide range of vitamins and minerals that are known to have immune activity. Therefore, it may help to boost immunity.Summer squash has high amount of zeaxanthin and lutein important antioxidant nutrients and also important to eye health.Summer squash is rich in micronutrients as B6 vitamin important nutrient for blood cells.Summer squash is important for heart health due to antioxidants and fiber content.Summer squash helps in weight loss. It consist of about 95% water, while this makes them a very low calorie vegetable, containing just about 20 calories per cup.Summer squash is high in antioxidants, like beta carotene which can offer some protection against certain types of cancer.Summer squash reduces the risk of age-related eyes disease. It is rich in vitamin C and beta carotene, two nutrients important for eye health.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'49',
         heading:'Professional FAQs: What are the health benefits of having tamarind?' ,
         subheading:'Tamarind is rich in iron, magnesium and phosphorus which makes a good source of anti-inflammatory compounds. However, tamarind is a high carbohydrate, high sugar fruit and in order to get enough of the benefits you will need to eat a big quantity which will consequently mean you eat a lot of sugar - this will in turn increase blood glucose, blood insulin and therefore drive more inflammation in the body.A good substitute for the needed compounds found in tamarind are pastured eggs, pastured ruminant meat and liver (beef, lamb, goat, bison) as well as wild caught game or fish.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1faLTe.img?w=800&h=415&q=60&m=2&f=jpg',
         details:'Tamarind is a great source of antioxidants which may reduce cancer risk, have antimicrobial properties, attenuate oxidative stress, regulate blood sugar levels, and promote cardiovascular health (Arshad et al, 2019).',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'50',
         heading:'Avocado Benefits For Heart: How This Bright Green Fruit Helps Heart to Function Better?' ,
         subheading:'Avocado Benefits For Heart: Avocados are a feast for the eyes and the taste senses, with a characteristic egg-shaped form, rough skin, and a rich purple-black colour when mature.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fnki0.img?w=612&h=413&m=6',
         details:'The fruit avocado is very nutrient-dense, containing a wealth of important vitamins, minerals, and good fats. Avocados are a nutritious powerhouse, a gastronomic joy, and a topic of historical and cultural significance. Avocados are unparalleled in their combination of flavour and health. Consuming this fruit promotes general health and illness prevention since it is a great source of vital vitamins and minerals.The fruit avocado is very nutrient-dense, containing a wealth of important vitamins, minerals, and good fats. Avocados are a nutritious powerhouse, a gastronomic joy, and a topic of historical and cultural significance. Avocados are unparalleled in their combination of flavour and health. Consuming this fruit promotes general health and illness prevention since it is a great source of vital vitamins and minerals.Once again demonstrating its beneficial impact on cardiovascular health is a fresh review and meta-analysis of several research. According to the results, people who followed an avocado diet had lower overall cholesterol levels, lower levels of bad cholesterol (LDL), and greater levels of good cholesterol (HDL), compared to people who maintained a regular diet. According to the study, "Avocados are rich in monounsaturated fatty acids (MUFAs), fibre and plant sterols, which have cholesterol-lowering effects. Incorporating avocados into a low-fat diet can be beneficial."',        
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'51',
         heading:'Pooja Bhatt says people warned her to not participate in Bigg Boss: ‘My father Mahesh Bhatt, friend Deepak Tijori pushed me to do it’' ,
         subheading:'Bollywood actor Pooja Bhatt says people warned her about participating in Bigg Boss and how her father Mahesh Bhatt and close friend Deepak Tijori pushed her.',
         image:'https://images.indianexpress.com/2023/08/bigg-boss-ott-2-pooja-bhatt.jpg?w=640',
         details:'Pooja Bhatt emerged as one of the strongest contestants of Bigg Boss OTT 2. Without any social media support, the 90s star took on young contestants head-on with her maturity and composed personality. While she decided to participate in the Salman Khan-hosted show as a challenge, she revealed how people had warned her not to do it.In a chat with indianexpress.com, Pooja Bhatt shared that when the offer came her way, she asked herself what was there to lose. “I realised everything. And that was a good reason for me to do the show as I want to attempt things that either make me sink or soar. But yes, a lot of people warned me to not do the show and that made me more determined about doing it.”Pooja said that she has been a fan of Bigg Boss and followed the earlier seasons. Her brother Rahul Bhatt was also a contestant and she cast Sunny Leone for Jism 2 through the show. “Even before entering the house, I got so much from it. Frankly, I was in two minds but my father pushed me to do it. Also, my friend, actor Deepak Tijori was really persistent and said I should experience it; now I know why. I went with an open mind and heart and I have come out with my head held high and my heart flowing with love,” she said.While the Bombay Begums actor was quite a strong contestant, many in the audience felt that she wasn’t pushing herself to win. When asked about the same, the actor smiled to say, “See, the generation today comes with blind ambition and wants to win at any cost. The idea of victory is very different for me. It’s not the trophy but the journey that is most important to me. I didn’t consider that house as a set but took care of it like my own home. I also got to spend so much time with myself, and also get a detox from my phone and social media. I stepped out of my comfort zone and it’s humbling to be vulnerable. I didn’t lose myself, at least not in my eyes and that’s what’s a real win for me.”The actor also addressed claims that Bigg Boss and host Salman Khan were a little biased toward her. “Bulls**t. I think they were biased toward the other contestants but never me.',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'52',
         heading:'Kiara Advani reveals she hasn’t cooked anything after marriage with Sidharth Malhotra, praises his baking skills: ‘I must have boiled water’' ,
         subheading:'Sidharth Malhotra and Kiara Advani tied the knot in February and Kiara said that she is yet to cook after getting married.',
         image:'https://images.indianexpress.com/2023/08/kiara-3.jpg?w=640',
         details:'Bollywood celebrities Kiara Advani and Sidharth Malhotra consistently captivate fans with their perfect Instagram snapshots, frequently sparking curiosity among fans about their romantic journey. Kiara, during an appearance on NDTV’s Jai Jawan, responded to a personal question about her culinary skills after tying the knot with Sidharth.During the show, a soldier asked Kiara, “Apne apni rasoi mein sabse pehle recipe kya banayi thi shaadi ke baad? (What recipe did you make in your kitchen for the first time after getting married?)” Kiara responded with a wide smile and said, “Kuch nahi banaya aab tak. Pani garam kara hoga (I haven’t made anything yet. Must have just boiled water).”The actor, however, went on to call herself lucky, revealing that her husband, Sidharth, is an amazing cook. She said, “I am lucky kyunki mera joh pati hai he loves to cook. Toh zyaadaatar woh kuch bana lete hai khud ke liye aur main kha leti hu (I am lucky because my husband loves to cook. Mostly, he makes something and I take some of that.).” Kiara also revealed Sidharth’s famous dish. She said, “He makes really nice bread. It’s difficult to make bread but he makes a great bread.”',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'53',
         heading:'Ravie Dubey performs 28 minutes long monologue in his show Lakhan Leela Bhargav' ,
         subheading:'Ravie Dubey will be essaying the role of a criminal lawyer in this upcoming courtroom drama that will stream on JioCinema.',
         image:'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/08/Ravie-Dubey-performs-28-minutes-long-monologue-in-his-620.jpg',
         details:'Establishing himself as one of the most versatile actors, Ravie Dubey has achieved a phenomenal feat with his upcoming show Lakhan Leela Bhargav. The actor, who gained fame for his role in shows like Jamai Raja, recently shot for a 28-minute long monologue sequence. But what is more interesting is that the scene was shot in a single take and moreover, it was also filmed with a single camera.Playing a criminal lawyer from Lucknow in the show, Ravie Dubey shot for the monologue scene as a part of the concluding statement in the courtroom drama, streaming on Jio Cinema from August 21. Talking about his experience of shooting for the sequence, Ravie Dubey said, “As an actor, I feel it’s our constant responsibility to push the envelope and deliver new, unique, and interesting content to the audience. It’s our responsibility to attempt what’s not been done to the best of our ability. This 28-minute single shot monologue was one such opportunity that I got very excited about. We realised we have a winner at hand that can set a precedent.”He added, “We worked on the script overnight on the sets post our shift and immediately shot it the next day in a single take. Being a courtroom drama, the setting lent us an opportunity to attempt something like this, I am happy to report it went wonderfully well and we can safely say that this is among the longest single shot monologues in the world. This sequence adds a certain gravitas that not only elevates the impact of the show but also creates a valuable asset that we all will cherish for our lifetime.”Ravie has created an interesting and heroic portrayal of Lakhan with his swag and charm. Fans of the actor have expressed their excitement to see him in this fun role. The actor recently received a lot of love from them for exploring with different looks in his popular show Matsya Kand. Besides thse, Ravie is also looking forward to the release of Farradday, which not only stars him but is also produced by him. Apart from these, the actor co-owns Dreamiyata with wife Sargun Mehta and the couple are known for producing shows like Udaariyaan and Junooniyatt.',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'54',
         heading:'OG Dream Girl Hema Malini poses with Ayushmann Khurrana ahead of Dream Girl 2 release' ,
         subheading:'In an extraordinary fusion of nostalgia and entertainment, the iconic Dream Girl of yesteryears, Hema Malini, and the sensational Dream Girl of today, Ayushmann Khurrana, came face-to-face, leaving fans in awe as they united to promote the highly anticipated Dream Girl 2.',
         image:'https://media5.bollywoodhungama.in/wp-content/uploads/2023/08/OG_Dream_Girl.jpeg',
         details:'Bringing together the legendary charm of Hema Malini and the vibrant energy of Ayushmann Khurrana, this special moment celebrates the Dream Girl legacy that has captured hearts for generations. The two actors shared stories and laughter, highlighting the timeless appeal of dreams and characters that transcend time. This meeting wasn"t just about two Dream Girls – it was also a sneak peek into the world of Dream Girl 2. The sequel promises even more fun, laughter, and unique characters, building on the foundation of the first film.The promotion of Dream Girl 2 brings together the nostalgia of the past and the creativity of the present.',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'55',
         heading:'Khatron Ke Khiladi 13: Shiv Thakare and Archana Gautam unite for a stunt in Colors’ reality show' ,
         subheading:'Shiv Thakare opened up about doing a stunt with his Bigg Boss rival Archana Gautam and also appreciated the spirit she showcased in the stunt-based show.',
         image:'https://media5.bollywoodhungama.in/wp-content/uploads/2023/08/Khatron-Ke-Khiladi-13-Shiv-Thakare-and-Archana-Gautam-unite-for-a-stunt-620.jpg',
         details:'"Colors" show Khatron Ke Khiladi 13 promises to be an unmatched dose of excitement. Under the guidance of action maestro Rohit Shetty, this jungle-themed season introduces an eccentric level of danger. Imagine being tasked with performing a stunt alongside your rival - what could that experience be like? Adding to the adventure quotient, a first-time spectacle unfolds as two major rivals Archana Gautam and Shiv Thakare will be seen joining forces for the daring stunt titled "Watery grave - Croc transfer"For the unversed, Archana Gautam and Shiv Thakare have cultivated one of television"s most enduring rivalries, a feud that has persisted since their stint on Bigg Boss 16. The clash between these two personalities has evolved into a legendary showdown, capturing viewers" attention with its explosive dynamics. Will their past conflicts impact their performance in the team-up stunt, or could this potentially mark the beginning of a new friendship?Shiv Thakare on performing stunt with Archana Gautam said, ‘’As a contestant on Khatron Ke Khiladi 13, Archana has proven her skills excellently, and I"m completely comfortable performing any stunt alongside her. Moreover, Khatron Ke Khiladi is fundamentally a stunt-oriented show, where only one"s performance truly counts. We"ve approached each challenge with unwavering dedication, channelling all our efforts into performing to the best of our abilities.”',
         categorey:'Bollywood',
         date:'02/Aug/2023'
      },
      {
         id:'56',
         heading:"Britneys Husband Sam Asghari Seeks Financial Support, Attorneys Fees In Divorce Filing'" ,
         subheading:'Their marriage is the first for the 29-year-old Asghari and the third for the 41-year-old singer. The document lists the couple’s separation date as July 28.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/1h5rvuchleclarqu_1692329365.jpeg',
         details:'Britney Spears and her husband Sam Asghari separated nearly three weeks ago, and he is seeking spousal support and attorneys’ fees in their divorce, according to his divorce filing.Asghari, 29, filed his petition to dissolve his 14-month-old marriage to the 41-year-old pop superstar in Los Angeles County court late Wednesday. Like the vast majority of those who file for divorce in California, he cites irreconcilable differences as the reason for the split.The document lists the couple’s separation date as July 28, though reports of the split did not emerge until Wednesday. It says he will try to get financial support from her, while blocking her from getting any from him. And it seeks to have her pay for his divorce lawyers.The filing says the value of Spears’ and Asghari’s assets, and those they own jointly, has yet to be determined. Spears and Asghari had no children together.“No negative intention has ever been directed towards her and never will be. Sam has always and will always support her,” Asghari’s representative Brandon Cohen said Thursday afternoon.         ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'57',
         heading:'The Marvels Makers On Park Seo-joons MCU Character: It is Fun When You...' ,
         subheading:'Director Nia DaCosta and producer Mary Livanos confirmed that Park Seo Joon has a significant presence as part of the main cast in Captain Marvel 2.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/76snx6vsujoudo0n_1692259314.jpeg',
         details:'The Marvels trailer  was released a few months ago and it created a buzz among K-drama fans as they caught a glimpse of South Korean actor Park Seo-joon in the video. His inclusion in the Marvel Cinematic Universe sparked theories about his character is graph. Recently, the film is director Nia DaCosta and producer Mary Livanos opened up about his role.In an interview for the newest issue of Total Film magazine, Director Nia DaCosta and producer Mary Livanos confirmed that Park Seo Joon has a significant presence as part of the main cast in Captain Marvel 2. Marvel itself had previously acknowledged the same.DaCosta shed light on Seo-joon is character and revealed he has a dynamic connection with Carol Danvers (portrayed by Brie Larson). Their dance in the trailer seems to foreshadow their association. The filmmaker hinted that his character is remarkable and their relationship with Danvers will be intriguing. Producer Livanos, on the other hand, clarified that Park Seo-joon is MCU character is a valuable ally to Carol Danvers. He is someone who she regarded as a close friend.  "His character is really awesome, and [it is] really fun when you realise his relationship to our hero," she said.          ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'58',
         heading:'Margot Robbie-led Barbie Banned In Algeria Over LGBTQ+ Themes' ,
         subheading:'The countrys minister of culture, Mohammad Mortada said that "Barbie" "promotes homosexuality" and contradicts values of faith and morality.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/yypvsqypbv8uoeo4_1692244868.jpeg',
         details:'Greta Gerwig is mammoth hit "Barbie" which is currently grossing over $1.18 billion globally has been banned in several countries with the latest name being Algeria, due to the country believing that the movie promotes homosexuality while being divided on the movie’s LGBTQ+ themes.According to The Hollywood Reporter, Algeria is only the latest name to join the list, as several countries in the Gulf and Middle East, with the exception of Israel, the UAE and Saudi Arabia have completely banned it, such as Kuwait, Qatar, Bahrain and Lebanon.Algerian Censors have stated that they believe "Barbie" attempts to subtly impose Western values while attacking the countrys values, cultural ethos and institutions, as well as overly promote homosexuality and create an LGBTQ tide in the country.',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'59',
         heading:'Cole Sprouse Opens Up On Fan Backlash After Split With Riverdale Co-star Lili Reinhart' ,
         subheading:'In a recent interview, Cole Sprouse opened up on “nasty” fan reaction on his split with Riverdale co-star Lili Reinhart. The two dated for 3 years.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/efw6rdh6izilze10_1692204538.jpeg',
         details:'Riverdale is finally coming to an end after 7 seasons and more than 130 episodes. Based on Archie comics, the Netflix show starred Cole Sprouse, Lili Reinhart, KJ Apa and Camila Mendes in the lead roles. During the runtime of the series, Cole and Lili dated for three years intermittently and finally broke up in 2020. In a recent interview, the The Suite Life of Zack & Cody star opened up on “nasty” fan reaction on their split.In a conversation with Vulture, Cole talked about the nasty fan reaction to his break up with Lili. The actor added professional and personal lines were blurred to their audience. He said, "I get a lot of stuff sent to my house or my loved ones houses. Death threats, really nasty, honestly criminal stuff. Is that just a consequence of an incredible love? Or is that what fanaticism looks like? Perhaps because those lines were blurred to our audience, it is hard to break those things up when life moves on."This is not the first time Cole has talked about the public outrage over their breakup. Earlier, he opened up on how the public reacted to his separation with Lili and his current relationship with Ari Fournier, who he has been dating since July 2021. The actor said that netizens report everything about him and Ari as "bullying" and it immediately gets taken down. ',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'60',
         heading:'Kendall Jenner Talks About Loving "hard" After PDA Photos With Bad Bunny Go Viral' ,
         subheading:'Kendall Jenner opens up about her approach to love, emphasizing privacy and wisdom in relationships, reflecting on her journey to self-discovery.',
         image:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/hgjiq5v5db7pn20t_1692259693.jpeg',
         details:'Kendall Jenner was spotted getting intimate with Puerto Rican rapper Bad Bunny at Drakes concert a couple of days back. In a recent interview with a portal, the renowned model and reality TV star talked about her approach to love and how she prefers to keep her romantic life private. In the exclusive feature within Harpers Bazaar ICONS issue, Jenner however refrained from divulging specifics about her relationship with Bad Bunny.I love really hard, and I love without apology," expressed Kendall, revealing her passionate and determined nature. She emphasized her aversion to goodbyes and her resolute stance to fight for relationships, acknowledging her long-standing commitment to fostering connections since her early years, despite her former shyness.While Jenner did not explicitly discuss her romance with Bad Bunny, who is also known as Benito Antonio Martínez Ocasio, their recent public displays of affection have been a topic of intrigue. Videos emerged of the couple sharing a kiss during a lively dance at a Drake concert, showcasing their affection in the spotlight. They were also spotted enjoying breakfast together.',
         categorey:'Hollywood',
         date:'02/Aug/2023'
      },
      {
         id:'61',
         heading:'Yoga v/s Pilates: Which Form of Workout is the Best for You?' ,
         subheading:'Yoga or pilates, you might feel confused as to which one to choose and which one of the two is better for you. In the ever-changing world of workouts, you can switch from one form of workout to the other form and each of them will have a different impact on your body. However, in the midst of all of these, you will have to choose a form of workout that best suits you.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eWTgz.img?w=768&h=432&m=6',
         details:'Both yoga and pilates are low-impact workouts, however, each of them has its own benefits. Both of them come with their benefits and limitations and therefore, it is upto you to decide which one suits you best. Here, take a look at the benefits of yoga and pilates to choose the best one for you.Pilates can help to increase muscle strength and improve flexibility. It can also help with posture and reduce pain in the muscles and joints. This form of exercise focuses majorly on small movements of the body. Pilates can be done on a mat or using equipments. These equipments are made using springs, and levers, and it uses your body to give it resistance. Pilates can help you if you are suffering from arthritis, respiratory conditions, joint injuries and back pain among others.Yoga has several branches and there are different forms of yoga. Breathing and mindfulness are the most important parts of yoga. Yoga can also help to cure diseases and health conditions if they are detected in the early stages. It combines physical activity and mindful focus and can increase awareness of breathing and energy. Yoga can also help if you are suffering from several health conditions such as anxiety, arthritis, respiratory conditions, high blood pressure, chronic pain and others.Both yoga and pilates are great workouts by themselves. However, depending on your concerns you can choose either of them.There are different forms of yoga which requires flexibility and mobility. However, certain poses can be modified depending on an individual’s limitations and pain. Pilates on the other hand is a form of exercise which can help if you’re recovering from injuries due to its subtle movements. You can choose between mat pilates and equipment-based pilates. Both of these are great, however, mat pilates might be challenging if you have low mobility or poor core strength.        ',
         categorey:'Fitness',
         date:'02/Aug/2023'
      },
      {
         id:'62',
         heading:'Strength training vs resistance training: What’s the difference?' ,
         subheading:'Exercising is not always about weight loss. It is also about keeping your muscles strong and staying fit in general. ',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1b7X1U.img?w=768&h=432&m=6&x=450&y=104&s=98&d=98',
         details:'Adults who lead an inactive life experience three to eight percent loss of muscle mass per decade, apart from fat accumulation, notes a 2012 study published by the US National Library of Medicine. Fitness enthusiasts will tell you to go for strength training, but some may urge you to try resistance training. Now comes the important question. How are strength training and resistance training different?trength training is a form of physical exercise that focuses on building and developing muscle strength and endurance through resistance or weight training exercises, celebrity coach and athlete Rohit Nair tells Health Shots. It basically involves using machines, free weights or bodyweight exercises.it is true that strength training and resistance training are often used interchangeably, but there is a subtle difference between the two.Strength training focuses primarily on increasing muscle strength and power. It involves lifting heavy weights for a lower number of repetitions, typically in the range of 1 to 6 repetitions per set. The emphasis is on challenging the muscles with maximum resistance to stimulate muscle growth and strength gains.',
         categorey:'Fitness',
         date:'02/Aug/2023'
      },
      {
         id:'63',
         heading:'15 mini workout options when you’re pressed for time' ,
         subheading:'If you don’t have weights and you only have time to perform a single movement, go with the squat. Exercise physiologist Joel Hardwick calls it “probably the most functional exercise, and the one that you probably need most in your life.” In addition to your glutes and quadriceps, squats benefit your hip muscles, calves, hamstrings, and obliques.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVDVUR.img?w=800&h=415&q=60&m=2&f=jpg',
         details:'When in doubt, you can’t go wrong with good old-fashioned push-ups (or press-ups). The beauty of them is that they can be performed just about anywhere. Push-ups are great for building upper-body strength, working the chest, triceps, and shoulders primarily, as well as the lower back and core when done with proper form. How many push-ups you should do is based on your max number of reps. For example, if you can’t do more than 25 push-ups at once, aim for 50-75 total. If you’re able to comfortably do 50, go as high as 250.The pull-up is one of the most effective back-strengthening exercises, working the lats, traps, deltoids, biceps, and abs. If you don’t have a pull-up bar, you can achieve similar results with inverted rows by placing a sturdy broom or pole across two chairs. In addition to standard pull-ups (palms facing away), you can also do chin-ups (palms facing in) and neutral grip pull-ups (palms facing each other).High-intensity interval training (HIIT) is perfect for those who want to work up a good sweat but don’t have much time to work out. “HIIT involves short bursts of intense exercise alternated with low intensity recovery periods,” says Healthline, and best of all it can be done in as little as 10 minutes. Pamela Reif’s equipment-free guided workout is guaranteed to get your heart rate going and burn plenty of calories.',
         categorey:'Fitness',
         date:'02/Aug/2023'
      },
      {
         id:'64',
         heading:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVDVUR.img?w=800&h=415&q=60&m=2&f=jpg' ,
         subheading:'ym enthusiasts and fitness experts often share videos of their gym routines and related achievements. Although most of these videos are inspiring to watch, one particular is getting extra attention and love on the internet.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eHu98.img?w=612&h=344&m=6&x=438&y=187&s=51&d=51',
         details:'A video of a 68-year-old woman, who can be seen doing exercises in a gym, along with her trainer son. The woman determined to stay fit at such an old age, has left the netizens inspired and in awe.The motivating video was shared by the gym trainer on his Instagram handle ‘Choudhary Ajay Sangwan’. The clip was captioned, “Mom decided to make changes in her.” The video showed the elderly woman doing fitness exercises using heavy gym equipment.The clip began with the aged lady training along with her son. The duo looked dedicated as the mother lifted weights and used other gym equipment during her exercises. The energy of the two was visibly high as they did a fiery high-five after the woman successfully did some deadlifts.The viral video was posted a week ago and has gained a lot of love since then. The clip received many likes from the netizens. Some people lauded her dedication to staying fit at this age, while many called her videos inspiring.',
         categorey:'Fitness',
         date:'02/Aug/2023'
      },
      {
         id:'65',
         heading:'The best bodyweight exercises you can do at home' ,
         subheading:'The great thing about many bodyweight exercises is that they can be modified to accommodate different levels of fitness and workout goals. Take the humble but mighty pushup, helping to strengthen your chest, shoulders, triceps and core. You can do a basic pushup with your hands shoulder-width, and even on your knees if you have to work up to a full pushup.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eAHS4.img?w=800&h=415&q=60&m=2&f=jpg',
         details:'The great thing about many bodyweight exercises is that they can be modified to accommodate different levels of fitness and workout goals. Take the humble but mighty pushup, helping to strengthen your chest, shoulders, triceps and core. You can do a basic pushup with your hands shoulder-width, and even on your knees if you have to work up to a full pushup.Lunges are a great way to strengthen your legs and glutes, and to improve your balance and stability. With a basic lunge, you start from a standing position, step out deep with one foot, and squat low so the back knee almost touches the ground, and then return into a standing position, and then repeat on the other side.It’s a bird. It’s a plane. No, it’s the Superman exercise. You may be a mild-mannered Clark Kent type in your public life, but there’s no reason you can’t mimic the flying position of Superman at home. Lie on the floor on your stomach stretching your feet back and arms ahead, and then lift your upper body and legs into the air.The Superman can help you strengthen your lower back and stretch your spine. You can also try alternating Supermans, lifting one arm and the opposite leg higher and then changing.',
         categorey:'Fitness',
         date:'02/Aug/2023'
      },
      {
         id:'66',
         heading:'Five superfoods that will do wonders to your skin' ,
         subheading:"There is something about superfoods that we can't seem to get enough of. Whether it is in our diet or our beauty products. The skincare world is filled with new trends every single day. One such trend that is been creating a buzz lately revolves around something you might associate more with your diet than your skincare routine—superfoods, says Shreya Teratipally, chief product officer, Bayla Skin, a science-backed, natural skincare brand. In fact, several brands have incorporated these nutrient-rich foods into serums and creams.",
         image:'',
         details:'But what is the deal with superfoods in skincare and why is everyone talking about them? "Superfoods are like a buffet of treats for your skin—each offering its unique blend of benefits, targeting everything from hydration and firmness to that coveted lit-from-within glow. Their potent natural goodness, bursting with vitamins, antioxidants, and other skin-beneficial elements, is what makes them so alluring, she explains. Teratipally shares five popular superfoods and uncovers the secrets behind this deliciously nourishing trend. ',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'67',
         heading:'What happens to your body when you give up refined oil for a month?' ,
         subheading:'Know the health effects of refined oil (Source: Freepik) Refined oil, a staple ingredient found in most Indian kitchens, is used for a variety of applications, including sauteing, frying, dressings, and baking. Its neutral taste and high smoke point make it a preferred choice for cooking a range of dishes.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1foJi6.img?w=612&h=340&m=6',
         details:'However, overconsumption of refined oil can pose several health risks. Excessive intake has been linked to issues such as obesity, heart disease, and inflammation.As such, should you completely eliminate refined oil from your end? And what will happen to your body if you give up refined oil for a month, to begin with? We reached out to experts to know more.According to Dr Devendra Shrimal, director of cardiology, Narayana Multispeciality Hospital, Jaipur, giving up refined oil for a month can have several potential effects on the body."Refined oils, such as those used in fried and processed foods, are often high in unhealthy fats, which can contribute to weight gain, inflammation, and an increased risk of heart disease," he said, adding that by eliminating these oils, you may experience benefits such as improved heart health, reduced inflammation, and potentially even weight loss.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'68',
         heading:'Coconut Nutrition: Unlocking the Health Benefits with Expert Advice' ,
         subheading:'“Eat fresh coconut for a slimmer body and stronger bones” - Ramona Lehadus, Master of Research - MRes - MRes Nutrition & Metabolic Disorders',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fo0hw.img?w=612&h=304&m=6',
         details:'Coconut helps in weight loss. Coconut is low in carbohydrates and rich in fiber, which increases satiety. But beware, coconut is a food rich in calories, so consumption should be done in moderation. Coconut oil helps with weight loss because it is a source of medium chain triglycerides (MCT), which are quickly metabolized in the body. Coconut water is excellent for those who want to lose weight because it has very few calories and can replace drinks such as juice and soda.Coconut helps in strengthening the immune system. Coconut has substances such as lauric acid, which prevents the proliferation of fungi, viruses and bacteria. Also, it is an excellent anti-inflammatory.Coconut is high in calories and saturated fats hence if need be it should be consumed moderately daily. It is recommended that one should not consume more than 28 grams of coconut a day.Due to high saturated fat content, regular consumption of coconut oil, cream, or milk over time may raise LDL cholesterol and potentially increase a person is risk of cardiovascular disease.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'69',
         heading:'Edible mushroom: Nutrition tips from experts  ' ,
         subheading:'Mushrooms are known for their antioxidant properties, which can help to neutralise free radicals. As free radicals over time can damage the body and speed up the aging process.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fo4x9.img?w=800&h=415&q=60&m=2&f=jpg?w=800&h=415&q=60&m=2&f=jpg',
         details:'Mushrooms are low in sodium, a good source of potassium and essentially fat free. It is good at maintaining blood pressure and cholesterol levels. It may contribute positively to reducing risk of cardiovascular disease.Mushrooms contain prebiotic which can help support a healthy gut. The fibre in mushrooms are insoluble which can help keep bowels regular.Mushrooms are low in calories, which can be suitable for those watching their food intake and wanting to lose weight. They can make a meal more filling, which can help decrease hunger after meals.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'70',
         heading:'Can vitamin C help you stop heavy periods?' ,
         subheading:'eavy menstrual bleeding or menorrhagia, which may last over seven days, may take a physical and mental toll on health. You may not just need to change period products more often, but also experience the discomfort that comes with a heavy period flow.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1foIhh.img?w=1920&h=1080&q=60&m=2&f=jpg',
         details:'According to a 2004 study published by US National Library of Medicine, if your blood loss is greater than 80 ml per period, you experience heavy menstrual bleeding. The question is how to stop heavy periods? Did you know vitamin C consumption is considered one of the effective ways to curb heavy menstrual bleeding.When women experience heavy bleeding which is not normal and the frequency is more, the condition is known as menorrhagia, explains Dr Swetha M.P, Consultant - Obstetrician and Gynecologist, Motherhood Hospitals, HRBR Layout, Bengaluru. When bleeding lasts more than seven days and involves greater blood flow than is common during menstruation, it can be considered as heavy bleeding. This can be a matter of concern and its best to consult a gynaecologist at the earliest.When women experience heavy bleeding which is not normal and the frequency is more, the condition is known as menorrhagia, explains Dr Swetha M.P, Consultant - Obstetrician and Gynecologist, Motherhood Hospitals, HRBR Layout, Bengaluru. When bleeding lasts more than seven days and involves greater blood flow than is common during menstruation, it can be considered as heavy bleeding. This can be a matter of concern and its best to consult a gynaecologist at the earliest.When women experience heavy bleeding which is not normal and the frequency is more, the condition is known as menorrhagia, explains Dr Swetha M.P, Consultant - Obstetrician and Gynecologist, Motherhood Hospitals, HRBR Layout, Bengaluru. When bleeding lasts more than seven days and involves greater blood flow than is common during menstruation, it can be considered as heavy bleeding. This can be a matter of concern and its best to consult a gynaecologist at the earliest.This disorder develops when the tissue that ordinarily lines the uterus begins to grow inside the uterine muscles. This can lead to periods that are uncomfortable and heavy.',
         categorey:'Food',
         date:'02/Aug/2023'
      },
      {
         id:'71',
         heading:'Agnikul Cosmos to soon launch Indias first kerosene-oxygen-powered rocket' ,
         subheading:'Agnikul Cosmos to soon launch Indias first kerosene-oxygen-powered rocket         ',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fpbrW.img?w=1920&h=1080&q=60&m=2&f=jpg',
         details:'Indian firm Agnikul Cosmos is on its way to becoming the first in the country to privately design, develop and launch a liquid-fuelled rocket.Liquid-fuelled rockets are much more complicated to design and build, when compared to solid-fuelled rockets.Agnikul is targeting to launch their maiden rocket known as "Agnibaan SOrTeD" (SubOrbital Technological Demonstrator) within a few weeks, the firm said.Suborbital launches are meant to take the vehicle to the earth is upper atmosphere and not venture into space. Suborbital launches are the preferred method for startups to test and validate their maiden rocket, related sub-systems and thereby progress to more ambitious launch vehicle projects.',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'72',
         heading:'Russia Sends Back Photos From Trip to Moon' ,
         subheading:'Russian state media recently shared the first images taken by its Luna-25 spacecraft, showing the Earth as a small dot in the distance.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fm9yK.img?w=1920&h=1080&q=60&m=2&f=jpg',
         details:'Moon Snaps  Russia is officially on the way to the Moon, the country"s first lunar mission since 1976.Russian state media recently shared the first images taken by its Luna-25 spacecraft, showing the Earth as a small dot in the distance. Another image shows the Moon as an equally small dot, surrounded by the vastness of outer space.According to officially published data, the probe was about 192,625 miles from Earth. Roughly speaking, that is 80 percent of the way to the Moon.Earlier today, the 1,700-pound probe reached the Moons orbit, the first time a Russian mission has done so in almost 50 years. The goal is to attempt to land on the Moon four to six days from now.  ',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'73',
         heading:'Chandrayaan-3 lander separated from propulsion module, final trek to Moon begins' ,
         subheading:'In a significant development in India"s lunar exploration, the Indian Space Research Organisation (Isro) successfully separated the Vikram lander from the propulsion module of the Chandrayaan-3 mission today at 1 pm. ',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fnJq1.img?w=600&h=338&m=6',
         details:'The spacecraft is now one step closer to making a soft landing on the lunar surface.Named after the founder of the Indian space programme, Vikram Sarabhai, the lander carries the Pragyan rover. The separation of the lander from the propulsion module marks a crucial milestone in the mission.Following this, the lander will be put into a closer orbit around the Moon.The Chandrayaan-3 mission is currently in an orbit of 153 km x 163 km around the Moon. The next major event will be the selection of the landing site.Isro has expanded the landing area and chosen a spot with a 4 km x 2.4 km area, instead of 500 square meters during Chandrayaan-2. This decision was made to provide more flexibility for the landing attempt. The south-polar region of the Moon, despite its challenging terrain, is a highly valued target for scientists due to the potential presence of substantial amounts of ice. This could be useful for extracting fuel, oxygen, and even drinking water.  ',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'74',
         heading:'Ex-Linus Tech Tips employee talks about toxic work culture, says she once cut her leg open to get a day off' ,
         subheading:'Popular YouTube channel Linus Tech Tips (LTT), that is known for tech reviews as well as news, found itself in the middle of a controversy recently when YouTube channel Gamers Nexus posted a video highlighting concerns about content posted by LTT online.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fowQc.img?w=612&h=344&m=6&x=193&y=123&s=766&d=179',
         details:'And now, a former employee of LTT has said that the work culture at the company was extremely toxic and that she had once cut her leg open so that she could get a day off without being rebuked for it.The woman, Madison Reeve, had left the company in 2021 and took to Twitter to talk about her time there recently. In the Twitter thread, she also revealed how she was sexually harassed at LTT and that her mental health was being ruined.In response to Madisons allegations, LTT, in a tweet, said that they are conducting an internal assessment and have brought a third party investigator on board to look into the allegations. ',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      {
         id:'75',
         heading:'Bluesky Gets Self-Labeling Feature For Posts, Media Tab' ,
         subheading:'Twitter co-founder Jack Dorsey-backed Bluesky has announced that it is rolling out new features, including a self-labeling feature for posts, a new dedicated media tab, and more.',
         image:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fpjnI.img?w=612&h=350&m=6',
         details:'Twitter co-founder Jack Dorsey-backed Bluesky has announced that it is rolling out new features, including a self-labeling feature for posts, a new dedicated media tab, and more.To access this feature, users can go to the shield icon in the composer window. According to the company, self-tagging will expand categories of labels over time.The platform is also adding a dedicated media tab to profiles, which allows visitors to look at images and videos posted by a user. Moreover, the company is rolling out a feature that provides more information about blocked quoted posts, the report said.Last month, Bluesky replaced the "Whats Hot" feed with a new "Discover" feed.The Discover feed is a more complex feed that will evolve over time, according to the company. However, if users do not like the Discover feed, they can simply remove it and replace it with any other custom feed.Also, the Dorsey-backed company had raised $8 million to support its mission and growth. In June, the platform introduced new moderation and safety tooling including user lists and reply controls.Also, the Dorsey-backed company had raised $8 million to support its mission and growth. In June, the platform introduced new moderation and safety tooling including user lists and reply controls.Also, the Dorsey-backed company had raised $8 million to support its mission and growth. In June, the platform introduced new moderation and safety tooling including user lists and reply controls.Along with user lists and reply controls, Bluesky also introduced labeling, moderation controls, and hashtags.',
         categorey:'Technology',
         date:'02/Aug/2023'
      },
      
       
    ])
  return (
   
        <Store.Provider value ={[data,setData]}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bollywood' element={<Bollywood/>}/>
                <Route path='/hollywood' element={<Hollywood/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/fitness' element={<Fitness/>}/>
                <Route path='/food' element={<Food/>}/>
                <Route path='/discription/:id' element={<Discription/>}/>
            </Routes>

        </Store.Provider>
   
  )
}

export default DataStore

