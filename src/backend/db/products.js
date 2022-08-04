import { v4 as uuid } from 'uuid';
import {
  //FICTION
  HarryPotterAndTheCursedChild,
  MansSearchForMeaning,
  TheArcher,
  TheGreatTrainJourney,
  TheKiteRunner,
  ThreeThousandStitches,
  TheLittlePrince,
  HomeBody,
  WarAndPeace,
  LandourBazaar,
  LoveSonnetsOfGhalib,
  Siddhartha,
  //NON-FICTION
  MyJourney,
  ShoeDog,
  WhyIAmAnAtheist,
  Rajneeti,
  TheDhoniTouch,
  DiaryOfAYoungGirl,
  IndiasStruggleForIndependence,
  Karma,
  SevenSecretsOfShiva,
  RumisLittleBookOfLife,
  MyGita,
  Death,
  //SELF-HELP
  Ikigai,
  LifesAmazingSecrets,
  StarWithWhy,
  ThePowerOfYourSubconsiousMind,
  ThePsycologyOfMoney,
  ThinkAndGrowRich,
  ThinkLikeAMonk,
  BeleiveInYourself,
  AtomicHabits,
  Mindset,
  ChanakyaInDailyLife,
  Attached,
} from '../../assets';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

const calculateDiscountedAmount = (originalPrice, currentPrice) =>
  originalPrice - currentPrice;

const calculateDiscountPercentage = (originalPrice, currentPrice) =>
  Math.trunc(((originalPrice - currentPrice) / originalPrice) * 100) + '%';

export const products = [
  {
    _id: '8bb50d3a-35de-4ff5-95d4-c5535a923027',
    title: 'Harry Potter And The Cursed Child',
    author: 'J K Rowling',
    img: HarryPotterAndTheCursedChild,
    price: 499,
    discountedPrice: 323,
    discountedAmount: calculateDiscountedAmount(499, 323),
    discountedPercentage: calculateDiscountPercentage(499, 323),
    rating: 3.7,
    tag: 'bestseller',
    categoryName: ['fiction'],
    bookInfo: {
      summary:
        "Based on an original new story by J.K. Rowling, John Tiffany and Jack Thorne, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London's West End on 30th July 2016. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places",
    },
  },
  {
    _id: '496e0ae9-fdf0-4465-b03e-61ffde12a777',
    title: 'Mans Search for Meaning',
    author: 'Viktor Frankl',
    img: MansSearchForMeaning,
    price: 399,
    discountedPrice: 300,
    discountedAmount: calculateDiscountedAmount(399, 300),
    discountedPercentage: calculateDiscountPercentage(399, 300),
    rating: 4.7,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `Man's Search for Meaning is a book to read, to cherish, to debate, and one that will ultimately keep the memories of the victims alive." -JOHN BOYNE, from the Foreword Viktor E. Frankl's Man's Search for Meaning is a classic work of Holocaust literature that has riveted generations of readers. Like Anne Frank's Diary of a Young Girl and Elie Wiesel's Night, Frankl's masterpiece is a timeless examination of life in the Nazi death camps. At the same time, Frankl's universal lessons for coping with suffering and finding one's purpose in life offer an unforgettable message for readers seeking solace and guidance. This young readers' edition features the entirety of Frankl's Holocaust memoir and an abridged version of his writing on psychology, supplemented with pho-tographs, a map of the concentration camps, a glossary of terms, a selection of Frank!'s letters and speeches, and a timeline of his life and of important events in the Holocaust. These additional materials vividly bring Frankl's story to life, serving as valuable teach-ing and leaming tools. A foreword by renowned novelist John Boyne provides a stiring testament to the lasting power of Frankl's moral vision. "An enduring work of survival literature." -NEW YORK TIMES One of the ten most influential books in America. -The Library of Congress Bom in Vienna in 1905, VIKTOR E. FRANKL published more than thirty books on psy-chology and served as a visiting professor and lecturer at Harvard, Stanford, and other universities in the United States. Frankl died in 1997. JOHN BOYNE is the author of five novels for young readers, including The Boy in the Striped Pajamas, a New York Times #1 best seller that was made into a feature film. His novels have been published in more than fifty languages.`,
    },
  },
  {
    _id: 'e61f96a6-e3f3-4302-ae5b-f537df38b7aa',
    title: 'The Archer',
    author: 'Paulo Coelho',
    img: TheArcher,
    price: 299,
    discountedPrice: 259,
    discountedAmount: calculateDiscountedAmount(299, 259),
    discountedPercentage: calculateDiscountPercentage(299, 259),
    rating: 3.9,
    tag: 'new',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `In The Archer we meet Tetsuya, a man once famous for his prodigious gift with a bow and arrow but who has since retired from public life, and the boy who comes searching for him. The boy has many questions, and in answering them Tetsuya illustrates the way of the bow and the tenets of a meaningful life. Paulo Coelho's story suggests that living without a connection between action and soul cannot fulfil, that a life constricted by a fear of rejection or failure is not a life worth living. Instead, one must take risks, build courage and embrace the unexpected journey fate has to offer. With the wisdom, generosity, simplicity and grace that have made him an international bestseller, Paulo Coelho provides the framework for a rewarding life: hard work, passion, purpose, thoughtfulness, the willingness to fail and the urge to make a difference.
        `,
    },
  },
  {
    _id: '1f7f6f91-f3a8-4ef5-a80d-efd5850b9ec1',
    title: 'The Great Train Journey',
    author: 'Ruskin Bond',
    img: TheGreatTrainJourney,
    price: 170,
    discountedPrice: 101,
    discountedAmount: calculateDiscountedAmount(170, 101),
    discountedPercentage: calculateDiscountPercentage(170, 101),
    rating: 4.3,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `"Ruskin Bond is known for his signature simplistic and witty writing style. He is the author of several bestselling short stories, novellas, collections, essays and childrens books; and has contributed a number of poems and articles to various magazines and anthologies. At the age of twenty-three he won the prestigious John Llewellyn Rhys Prize for his first novel, The Room on the Roof. He was also the recipient of the Padma Shri in 1999, Lifetime Achievement Award by the Delhi Government in 2012 and the Padma Bhushan in 2014. Born in 1934, Ruskin Bond grew up in Jamnagar, Shimla, New Delhi and Dehradun. Apart from three years in the UK, he has spent all his life in India, and now lives in Landour, Mussoorie, with his adopted family."
        `,
    },
  },
  {
    _id: '2cc3348d-ac97-4300-b054-98f8289f0595',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    img: TheKiteRunner,
    price: 359,
    discountedPrice: 299,
    discountedAmount: calculateDiscountedAmount(359, 299),
    discountedPercentage: calculateDiscountPercentage(359, 299),
    rating: 4.7,
    tag: 'bestseller',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `
        The Kite Runner by Khaled Hosseini is your best bet in case you’re looking for the perfect emotional release. It tells you the story of Amir, a young boy from Kabul, and his close friend Hassan. Set against the backdrop of tumultuous events, this novel is sure you make you feel emotions that you never knew existed.
        
        About the Novel
        
        From the fall of Afghanistan’s monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime, The Kite Runner will stun you with its simplicity and authenticity of the characters. Khaled Hosseini weaves the characters in this novel with such magical writing that you’ll feel as if Amir and Hassan were people that you knew a long time ago. A story of family, friendship, tragedy, and even sexual assault, The Kite Runner is the kind of novel that’s very difficult to put down.
        
        About the Author
        
        Before turning into a full-time writer, Afghan-born American novelist Khaled Hosseini was a physician. It was Hosseini’s debut book The Kite Runner, which was set in Afghanistan and featured an Afghan as the protagonist, that brought him fame and urged him to retire from medicine to pursue writing. Apart from The Kite Runner, Khaled Hosseini has written three other books - A Thousand Splendid Suns (2007), And the Mountains Echoed (2013) and Sea Prayer (2018). Currently, he lives with his wife and two children in Northern California.`,
    },
  },
  {
    _id: '3a3754d0-24f2-40bc-a1f6-f83a291f172e',
    title: 'Three Thousand Stitches',
    author: 'Sudha Murty',
    price: 199,
    img: ThreeThousandStitches,
    discountedPrice: 159,
    discountedAmount: calculateDiscountedAmount(199, 159),
    discountedPercentage: calculateDiscountPercentage(199, 159),
    rating: 1.3,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `Sudha Murty was born in 1950 in Shiggaon in north Karnataka. She did her MTech in computer science and is now the chairperson of the Infosys Foundation. A prolific writer in English and Kannada, she has written novels, technical books, travelogues, collections of short stories and non-fictional pieces and four books for children. Her books have been translated into all the major Indian languages. Sudha Murty was the recipient of the R.K. Narayan Award for Literature and the Padma Shri in 2006 and the Attimabbe Award from the government of Karnataka for excellence in Kannada literature in 2011.
        `,
    },
  },
  {
    _id: '83dfebb9-054c-467e-af23-8fed9cc3d8c8',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery ',
    price: 150,
    img: TheLittlePrince,
    discountedPrice: 130,
    discountedAmount: calculateDiscountedAmount(150, 130),
    discountedPercentage: calculateDiscountPercentage(150, 130),
    rating: 3.3,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `The Little Prince  is a novella by French aristocrat, writer, and military aviator Antoine de Saint-Exupéry. It was first published in English and French in the United States by Reynal & Hitchcock in April 1943 and was published posthumously in France following liberation; Saint-Exupéry's works had been banned by the Vichy Regime. The story follows a young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss. Despite its style as a children's book, The Little Prince makes observations about life, adults and human nature.

        The Little Prince became Saint-Exupéry's most successful work, selling an estimated 140 million copies worldwide, which makes it one of the best-selling and most translated books ever published.It has been translated into over 301 languages and dialects.The Little Prince has been adapted to numerous art forms and media, including audio recordings, radio plays, live stage, film, television, ballet, and opera.`,
    },
  },
  {
    _id: '1772e3b4-e3d2-4730-8455-c617c9271da0',
    title: 'Home Body',
    author: 'Rupi Kaur',
    price: 699,
    img: HomeBody,
    discountedPrice: 599,
    discountedAmount: calculateDiscountedAmount(699, 599),
    discountedPercentage: calculateDiscountPercentage(699, 599),
    rating: 3.9,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `From the Number One Sunday Times bestselling author of milk and honey and the sun and her flowers comes her greatly anticipated third collection of poetry. rupi kaur constantly embraces growth, and in home body, she walks readers through a reflective and intimate journey visiting the past, the present and the potential of the self. home body is a collection of raw, honest conversations with oneself - reminding readers to fill up on love, acceptance, community, family, and embrace change. illustrated by the author, themes of nature and nurture, light and dark, rest here. i dive into the well of my body and end up in another world everything i need already exists in me there's no need to look anywhere else - home
        `,
    },
  },
  {
    _id: '6a24cd81-0257-42c3-b9bc-9ceaaa8e8a47',
    title: 'War And Peace',
    author: 'SLeo Tolstoy',
    price: 299,
    img: WarAndPeace,
    discountedPrice: 219,
    discountedAmount: calculateDiscountedAmount(299, 219),
    discountedPercentage: calculateDiscountPercentage(299, 219),
    rating: 4.2,
    tag: '',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `War And Peace is a classic novel that delves into the dual themes of war and love. The book was first published in 1869 and is widely considered as Leo Tolstoy’s magnum opus.

        Summary Of The Book
        
        Originally written in Russian, War And Peace has been translated into a number of languages, including English. The novel, though one of the longest ever written, is a must read for every literature enthusiast. The novel is set in the early 19th century and revolves around the French invasion of Russia by Napoleon.
        
        War And Peace is truly an epic in itself and is divided into four volumes and has an epilogue in two parts. Most of the characters of the large cast are introduced early, at a social party in St. Petersburg. While the novel is fictional in nature, it does include some historical facts and figures, such as Alexander I and Napoleon, and the French Invasion of Russia in 1812 and the Napoleonic Wars. The novel takes us on an unforgettable journey as we encounter various characters in search of love amidst war and peace.
        
        The novel’s plot can be seen from two different perspectives. First, it depicts the Napoleonic invasion of Russia, and the Russian war efforts to defeat the French. The other plot is mainly concerned with the personal dramas of five aristocratic families, particularly the Bolkonskys, the Bezukhovs, and the Rostovs. The novel follows these representatives of the Russian aristocracy, as they build their lives in a war torn empire.
        The principal characters of the novel are three young aristocrats, Pierre, Andrei and Natasha. While the novel focuses on the aristocracy, the peasantry and the soldiers are given ample voice throughout. War And Peace is not just a novel about human emotions, frailties and history, but it is also a discourse on Tolstoy’s philosophies. The later part of the novel includes many sections that throw light on Tolstoy’s philosophical ideologies.
        
        About The Authors
        
        Leo Tolstoy was a Russian novelist and short story writer. He was born as Count Lev Nikolayevich Tolstoy in 1828, but is widely known as Leo Tolstoy.
        
        Tolstoy’s other famous novels are Anna Karenina and The Death of Ivan Ilyich. He has also written a number of short stories that include How Much Land Does A Man Need?, God Sees The Truth, But Waits, Promoting a Devil, Alyosha the Pot and Repentance.
        
        Leo Tolstoy lost his parents when he was nine and was looked after by an elderly aunt. He studied under French tutors and later studied at Kazan University. He discontinued his studies and after many years joined the army during the Crimean War. Tolstoy married Sophia
        
        Andreevna Behrs in 1862 and had thirteen children. He died in 1910, after a bout of pneumonia.
        
        Anthony Briggs is a well known translator from Russian to English.
        
        Some of his translated works include Dead Souls, The House of the Dead/The Gambler, and A Confession.
        He is a guest lecturer at Bristol University and has served as a professor at University of Birmingham.`,
    },
  },
  {
    _id: 'b80feeac-f542-44f2-ab56-91f87c3737c5',
    title: 'Landour Bazaar',
    author: 'Ruskin Bond',
    price: 199,
    img: LandourBazaar,
    discountedPrice: 160,
    discountedAmount: calculateDiscountedAmount(199, 160),
    discountedPercentage: calculateDiscountPercentage(199, 160),
    rating: 4.7,
    tag: 'new',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `"Ruskin Bond is known for his signature simplistic and witty writing style. He is the author of several bestselling short stories, novellas, collections, essays and childrenÃ¢ÂÂs books; and has contributed a number of poems and articles to various magazines and anthologies. At the age of twenty-three he won the prestigious John Llewellyn Rhys Prize for his first novel, The Room on the Roof. He was also the recipient of the Padma Shri in 1999, Lifetime Achievement Award by the Delhi Government in 2012 and the Padma Bhushan in 2014. Born in 1934, Ruskin Bond grew up in Jamnagar, Shimla, New Delhi and Dehradun. Apart from three years in the UK, he has spent all his life in India, and now lives in Landour, Mussoorie, with his adopted family."
        `,
    },
  },
  {
    _id: '1cfef06d-d486-47da-b109-0e83caedd2a3',
    title: 'Love Sonnets Of Ghalib',
    author: 'Ghalib',
    price: 2450,
    img: LoveSonnetsOfGhalib,
    discountedPrice: 989,
    discountedAmount: calculateDiscountedAmount(2450, 989),
    discountedPercentage: calculateDiscountPercentage(2450, 989),
    rating: 3.9,
    tag: 'new',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `The love sonnets of the great poet Mirza Ghalib have won the hearts of millions with their perfect crafting and universal theme. Translated into English for the first time by Dr Sarfaraz K. Niazi, this complete collection of the love sonnets by Ghalib are accompanied by the artistic renditions of Asia's famous artist, Sadequain, beautifully depicting the essence of these timeless verses.
        `,
    },
  },
  {
    _id: 'd1cf5443-86f1-4781-a10c-32cda84f3b26',
    title: 'Siddhartha',
    author: 'Hermmann Hesse',
    price: 379,
    img: Siddhartha,
    discountedPrice: 301,
    discountedAmount: calculateDiscountedAmount(379, 301),
    discountedPercentage: calculateDiscountPercentage(379, 301),
    rating: 3.7,
    tag: 'bestseller',
    categoryName: ['fiction'],
    bookInfo: {
      summary: `Siddhartha is a philosophical novel by Herman Hesse, telling the story of the time of Siddhartha Gautama, the Buddha, when another man named Siddhartha leaves his home and begins a spiritual quest to rival that of the Enlightened One himself.

        Summary of the Book
        
        During the time when Gautama Buddha was teaching in Ancient India, a Brahmin man named Siddhartha leaves his home in a quest to find spiritual meaning. He is joined by his best friend Govinda. His journey brings him face to face with the Buddha. While Govinda joins the Buddha’s school, Siddhartha continues on his journey believing that every man must seek his own spiritual goals and that teachers can never show them the way. On this journey, he meets a beautiful woman named Kamala. She tells him that he must become rich to have her and this makes Siddhartha think again of materialistic things. When he earns the wealth he desires, he earns Kamala’s love and lives with her as a lover for years until once again Govinda crosses his path, now a wandering Buddhist. Opening his eyes at his shameful failure, Siddhartha goes to a ferryman he once met and decides to spend his life by the river, seeking spiritual fulfillment. Again he meets Govidna, and at last Siddhartha has the answers he has been searching. Herman Hesse’s most famous book is a monumental work into the realm of human spirit and the meaning of life.
        
        About Herman Hesse
        
        Herman Hesse was a German writer, poet, novelist and painter, also remembered for Steppenwolf and The Glass Bead Game.
        
        Hesse’s foray into writing began when he started working in the bookshop in Tübingen, delving into his own work by the evening and choosing the books over friends. He was inspired by Nietzsche, Goethe, Lessing, Schiller and Greek mythology, and won the Nobel Prize in Literature, the Peace Prize of the German Book Trade, and the Goethe Prize.`,
    },
  },

  //NON-FICTION
  {
    _id: '4ddb4950-ed1b-4a25-96a9-82ebebed52e2',
    title: 'My Journey',
    author: 'A.P.J Abdul Kalam',
    img: MyJourney,
    price: 295,
    discountedPrice: 219,
    discountedAmount: calculateDiscountedAmount(295, 219),
    discountedPercentage: calculateDiscountPercentage(295, 219),
    rating: 4.9,
    tag: '',
    categoryName: ['non-fiction', 'biography'],
    bookInfo: {
      summary: `Dr. APJ Abdul Kalam’s life has been an interesting one. From being born in a small village to becoming a doctor, to the country’s President, his journey literally has been intriguing and worth knowing about. In his new book, “My Journey”, Dr. Kalam takes us through his life and his inspiration, from when he was a child to date. This only should prompt you to read this book, besides other things.

      “My Journey” is an honest take on life and aspirations and how to get to achieving it all. It speaks of a man’s humble beginnings and how he still remains grounded after all these years. The writing is as simple as you can think of, which is the highlight of the book – it can be read by anyone. All said and done, “My Journey” will have you believe more in yourself and your capabilities.
      
       
      
      Published in the year 2013, My Journey: Transforming Dreams Into Actions is a collection of some key events in the life of Dr. A. P. J. Kalam, which contributed to his tremendous success as a scientist and as India’s 11th President.
      
      Summary Of The Book
      
      My Journey: Transforming Dreams Into Actions documents the life of a young boy from Rameshwaram, who not only became a renowned scientist in India, but also held the highest post that the country could ever offer. Through the course of this book, Kalam tells his readers about key events in his life that brought him to where he is, today. Kalam doesn’t only talk about him being India’s former President, but as a boy, son, student, and scientist. Kalam’s hometown, Rameshwaram, was indeed a serene place to dwell.
      
      Kalam speaks about his dream of becoming a fighter pilot, which crashed as he was awarded the ninth position among 25 candidates, with the selected ones being the top eight. Kalam recalls his dream of flying a machine as it rises higher into the stratosphere. He tells the readers that he received two interview calls, one from the Directorate of Technical Development and Production (DTDP) and the other from the Indian Air Force, Dehradun. Kalam goes on to explain that the DTDP interview was fairly easy, but for the Air Force, he needed to have a certain level of “smartness”, apart from the qualifications and practical knowledge. After being rejected by the IAF, he went through a trying time, where he decided to move on and become a scientist.
      
      He began to work tirelessly at his job as the Senior Scientific Assistant at DTDP. Kalam also speaks about his close-knit family and the impact they had on his life. Despite his childhood full of difficulties, he was able to cope because of his highly supportive family. He also speaks briefly about the peaceful co-existence of Islam, Christianity, and Hinduism, in his village. Kalam also talks about Dr. Vikram Sarabhai and the profound impact he had on his life. Kalam also talks about his tag as the “Missile Man”, as well as his unique hairstyle.
      
      About A. P. J. Abdul Kalam
      
      A. P. J. Abdul Kalam is an author, scientist, and a former Indian President.
      
      Some of Kalam’s literary works include Turning Points: A Journey Through Challenges, Envisioning An Empowered Nation, and India 2020: A Vision For The New Millennium.
      
      Born on 15th October 1931, Kalam was raised in Rameshwaram. He finished his schooling from the Rameshwaram Elementary School. Kalam went on to pursue his undergraduate degree in Physics from St. Joseph’s College, Tiruchirappalli. He obtained his Master’s degree in aerospace engineering from the Madras Institute of Technology. Prior to serving as the President of India, Kalam worked as an aerospace engineer at the Indian Space Research Organization and the Defense Research and Development Organization. He is also known as the Missile Man of India for his immense contributions towards developing ballistic missile and launch vehicle technology. Kalam currently serves as a visiting Professor at the Indian Institute of Management Indore and the Indian Institute of Management Shillong. He has been awarded the Padma Bhushan, Padma Vibhushan, Ramanujan Award, and the Bharat Ratna.`,
    },
  },
  {
    _id: 'd9df11b6-8779-4c5b-8165-f39ba3533f17',
    title: 'ShoeDog',
    author: 'Knight Phil',
    img: ShoeDog,
    price: 399,
    discountedPrice: 356,
    discountedAmount: calculateDiscountedAmount(399, 356),
    discountedPercentage: calculateDiscountPercentage(399, 356),
    rating: 4.0,
    tag: '',
    categoryName: ['non-fiction', 'biography'],
    bookInfo: {
      summary: `Shoe Dog is a memoir by Nike co-founder Phil Knight. The memoir chronicles the history of Nike from its founding as Blue Ribbon Sports and its early challenges to its evolution into one of the world's most recognized and profitable companies. It also highlights certain parts of Phil Knight's life.

        Bill Gates named Shoe Dog one of his five favorite books of 2016 and called it “an amazing tale, a refreshingly honest reminder of what the path to business success really looks like. It’s a messy, perilous, and chaotic journey, riddled with mistakes, endless struggles, and sacrifice. Phil Knight opens up in ways few CEOs are willing to do.`,
    },
  },
  {
    _id: '408262c6-b449-4ed8-a9c8-d13af5267c96',
    title: 'Why I Am An Atheist',
    author: 'Bhagat Singh',
    img: WhyIAmAnAtheist,
    price: 189,
    discountedPrice: 180,
    discountedAmount: calculateDiscountedAmount(189, 180),
    discountedPercentage: calculateDiscountPercentage(189, 180),
    rating: 4.9,
    tag: '',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `Why I Am an Atheist is an essay written by Indian revolutionary Bhagat Singh in 1930 in Lahore Central Jail. The essay was a reply to his religious friends who thought Bhagat Singh became an atheist because of his vanity.
        `,
    },
  },
  {
    _id: '7f522787-d8e3-49be-a355-304fc019c13f',
    title: 'Rajneeti',
    author: 'Gautam Chintamani ',
    img: Rajneeti,
    price: 699,
    discountedPrice: 299,
    discountedAmount: calculateDiscountedAmount(699, 299),
    discountedPercentage: calculateDiscountPercentage(699, 299),
    rating: 3.7,
    tag: '',
    categoryName: ['non-fiction', 'biography'],
    bookInfo: {
      summary: `Rajnath Singh Rajnath Singh rose from a Swayamsevak in the RSS to the Chief Minister of Uttar Pradesh, and also served as a Cabinet Minister in the Vajpayee Government. Jailed during the Emergency, Singh was the president of the BJP's youth wing, the Bharatiya Janata Yuva Morcha. A two-term President, Singh saw the elevation of Narendra Modi as the party's PM candidate and delivered BJP's biggest elections victory in 2014. Since then, as India's Home Minister, he has ushered in a new phase in the country's security where both internal and external threats have been minimised. Under Singh, the Red menace from Naxalites and Maoists has been nearly wiped out, and the state of Jammu and Kashmir saw the first local body elections in over a decade. Read on to know more about one of the tallest politicians in present-day India. In a career spanning nearly fifty years, Rajnath Singh has not only witnessed but also played a significant role in shaping the history of this country. Drawing from a vast amount of research and in-depth interviews, Gautam Chintamani's engaging narrative reveals for the first-time a politician who never shied away from doing the right thing.
        `,
    },
  },
  {
    _id: 'ffc156db-cb11-408a-9ec9-8c65a37d0eba',
    title: 'The Dhoni Touch',
    author: 'Bharat Sundaresan',
    img: TheDhoniTouch,
    price: 389,
    discountedPrice: 120,
    discountedAmount: calculateDiscountedAmount(389, 120),
    discountedPercentage: calculateDiscountPercentage(389, 120),
    rating: 4.5,
    tag: 'new',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `About the Book
      
        Be it his signature helicopter shot or his ever-calm demeanour, Mahendra Singh Dhoni has always found a way to tap into the hearts of his fans. For someone who was training to be a footballer, who could have told that Mahi was going to take the world of cricket by storm. In The Dhoni Touch: Unravelling the Enigma That Is Mahendra Singh Dhoni, Bharat Sundaresan reaches out to some of Mahi’s closest friends to find out how he became the man that he is today.
        
        About the Author
        
        An avid fan of heavy-metal music, Bharat Sundaresan has covered the sport of cricket for the Indian Express for 10 years. He is also someone who deeply adores professional wrestling and West Indian cricket. In fact, he spent seven out of his 10-year stint in the Indian Express tracking the Jamaican cricketer, Patrick Patterson. This alone proves that Bharat is a person who eats, sleeps and breathes cricket. And, that can be seen in his book The Dhoni Touch: Unravelling the Enigma That Is Mahendra Singh Dhoni.`,
    },
  },
  {
    _id: '9a09dbb1-da54-4923-95d7-6be4624b5477',
    title: 'The Diary Of A Young Girl',
    author: 'Anne Frank ',
    img: DiaryOfAYoungGirl,
    price: 189,
    discountedPrice: 129,
    discountedAmount: calculateDiscountedAmount(189, 129),
    discountedPercentage: calculateDiscountPercentage(189, 129),
    rating: 3.7,
    tag: '',
    categoryName: ['non-fiction', 'biography'],
    bookInfo: {
      summary: `The Holocaust was one of the most horrendous and terrible eras in history. Innumerable books have been written describing the horrors of the Holocaust; but nothing beats the documentation of a family who had gone into hiding in the diary of a little girl, Anne Frank. Honest, lucid and empathetic; The Diary of A Young Girl deserves a read by everyone who has ever questioned mental strength of humans and also by those who cannot come to terms with the cruelties that could be inflicted by humans upon fellow humans. The first entry in the diary is on June 12, 1942 by Anne Frank, who had received it as a birthday present and the entries in the diary end abruptly on 1 August, 1944.
        `,
    },
  },
  {
    _id: '865664f3-edef-4f05-a0e3-11a97c2d10e5',
    title: "India's Struggle For Independence",
    author: 'Bipan Chandra',
    img: IndiasStruggleForIndependence,
    price: 799,
    discountedPrice: 319,
    discountedAmount: calculateDiscountedAmount(799, 319),
    discountedPercentage: calculateDiscountPercentage(799, 319),
    rating: 3.7,
    tag: 'bestseller',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `Designed for ardent history enthusiasts, India's Struggle For Independence is one of the most exhaustive and precise account of the struggle of Indian Independence ever written in the literary world. Written and edited by five expert authors, it presents a detailed outlook on one of the most important periods in Indian history.

        The facts and details provided in this book have been gathered from oral and written sources, and various other primary sources have been used along with years of intense research. Written with a very concise approach, it is a one of a kind book that details the intricacies of the Indian Independence struggle.
        
        The struggle for Indian Independence took a long time and was something that affected the whole country. Every state in the country boasted of some kind of revolt – minor or major during this period. Numerous revolutionaries throughout the country came together in their efforts to fight against the British rule and set their country free. Few of the chapters in the book are The Fight to Secure Press Freedom, Foundation of the Congress: The Myth, World War I and Indian Nationalism: The Ghadar, An Economic Critique of Colonialism, Peasant Movements and Uprisings after 1857, The Non-Cooperation Movement—1920-1922, The Gathering Storm-1927-1929, Civil Rebellions and Tribal Uprisings, and many more.`,
    },
  },
  {
    _id: '139f108e-dbd1-4f86-b49f-58ca438bd8b6',
    title: 'Karma',
    author: 'Sadhguru',
    img: Karma,
    price: 299,
    discountedPrice: 199,
    discountedAmount: calculateDiscountedAmount(299, 199),
    discountedPercentage: calculateDiscountPercentage(299, 199),
    rating: 3.9,
    tag: 'new',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `Most people understand karma as a balance sheet of good and bad deeds, virtues and sins. The mechanism that decrees that we cannot evade the consequences of our own actions. In reality, karma has nothing to do with reward and punishment. Karma simply means action: your action, your responsibility. It is not some external system of crime and punishment, but an internal cycle generated by you. Accumulation of karma is determined only by your intention and the way you respond to what is happening to you. Over time, it is possible to become ensnared by your own unconscious patterns of behavior.

       A new perspective on the commonly used and misinterpreted concept of “karma” that offers the key to happiness and enlightenment, from the New York Times bestselling author and world-renowned yogi and mystic, Sadhguru.`,
    },
  },
  {
    _id: '2f97e084-afd5-4954-babb-2dffbd0d26a5',
    title: 'Seven Secrets Of Shiva',
    author: 'Devdutt Pattanaik',
    img: SevenSecretsOfShiva,
    price: 299,
    discountedPrice: 234,
    discountedAmount: calculateDiscountedAmount(299, 234),
    discountedPercentage: calculateDiscountPercentage(299, 234),
    rating: 3.5,
    tag: '',
    categoryName: ['non-fiction', 'religious'],
    bookInfo: {
      summary: `Shiva, ?the destroyer? among the Hindu trinity (of gods), is depicted in many contradictory manners. He is an ascetic who wears animal skin, his body smeared with ashes. Contradictory to his wild nature, he is also depicted as having a family, with a beautiful wife and two children. There are many more such varied representations of Shiva, the most prominent of these being the Linga and the Nataraja. The author, Devdutt Pattanaik, introduces the readers to these varied aspects and representations and then sets about interpreting them. He explains the different anomalies and conflicts in beliefs, as well as the symbolism, rituals and reasons behind Hindu worship.
        `,
    },
  },
  {
    _id: 'e2381978-ad43-450f-91f3-97f5e7604029',
    title: "Rumi's Little Book Of Life",
    author: 'Rumi',
    img: RumisLittleBookOfLife,
    price: 499,
    discountedPrice: 126,
    discountedAmount: calculateDiscountedAmount(499, 126),
    discountedPercentage: calculateDiscountPercentage(499, 126),
    rating: 4.0,
    tag: 'bestseller',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `Rumi's Little Book of Life is a beautiful collection of 196 poems by Rumi, previously unavailable in English. Translated by native Persian speakers, Maryam Mafi and Azima Melita Kolin, this collection will appeal to Rumi lovers everywhere.

        This collection of mystical poetry focuses on one of life's core issues: coming to grips with the inner life. During the course of life, each of us is engaged on an inner journey. Rumi's Little Book of Life is a guidebook for that journey. The poetry is a companion for those who consciously enter the inner world to explore the gardens within--out of the everyday "world of dust"--through an ascending hierarchy that restores one's soul to the heart; the heart of the spirit; and in finding spirit, transcending all`,
    },
  },
  {
    _id: '54def3c1-ef46-4263-a4c8-bdbcc3ba5a34',
    title: 'My Gita',
    author: 'Devdutt Pattanaik',
    img: MyGita,
    price: 499,
    discountedPrice: 389,
    discountedAmount: calculateDiscountedAmount(499, 389),
    discountedPercentage: calculateDiscountPercentage(499, 389),
    rating: 4.1,
    tag: 'bestseller',
    categoryName: ['non-fiction', 'religious'],
    bookInfo: {
      summary: `In My Gita, acclaimed mythologist Devdutt Pattanaik demystifies The Bhagavad Gita for the contemporary reader. His unique approach thematic rather than verse-by-verse makes the ancient treatise eminently accessible, combined as it is with his trademark illustrations and simple diagrams. In a world that seems spellbound by argument over dialogue, vi-vaad over sam-vaad, Devdutt highlights how Krishna nudges Arjuna to understand rather than judge his relationships. This becomes relevant today when we are increasingly indulging and isolating the self (self-improvement, self-actualization, self-realization even selfies!). We forget that we live in an ecosystem of others, where we can nourish each other with food, love and meaning, even when we fight. So let My Gita inform your Gita

        `,
    },
  },
  {
    _id: 'd86691e2-8aaf-4b8e-a941-f7de29373507',
    title: 'Death',
    author: 'Sadhguru',
    img: Death,
    price: 199,
    discountedPrice: 129,
    discountedAmount: calculateDiscountedAmount(199, 129),
    discountedPercentage: calculateDiscountPercentage(199, 129),
    rating: 2.4,
    tag: '',
    categoryName: ['non-fiction'],
    bookInfo: {
      summary: `Death is a taboo in most societies in the world. But what if we have got this completely wrong? What if death was not the catastrophe it is made out to be but an essential aspect of life, rife with spiritual possibilities for transcendence? For the first time, someone is saying just that. In this unique treatise-like exposition, Sadhguru dwells extensively upon his inner experience as he expounds on the more profound aspects of death that are rarely spoken about. From a practical standpoint, he elaborates on what preparations one can make for one's death, how best we can assist someone who is dying and how we can continue to support their journey even after death. Whether a believer or not, a devotee or an agnostic, an accomplished seeker or a simpleton, this is truly a book for all those who shall die!
        `,
    },
  },

  //SELF-HELP
  {
    _id: 'a158c1f8-9553-425d-9e93-f9e1ad2f7dad',
    title: 'Ikigai',
    author: 'Hector Gracia',
    img: Ikigai,
    price: 189,
    discountedPrice: 139,
    discountedAmount: calculateDiscountedAmount(189, 139),
    discountedPercentage: calculateDiscountPercentage(189, 139),
    rating: 1.7,
    tag: 'new',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `THE INTERNATIONAL BESTSELLER We all have an ikigai. It's the Japanese word for 'a reason to live' or 'a reason to jump out of bed in the morning'. It's the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful. 'I read it and it's bewitched me ever since. I'm spellbound.' Chris Evans 'A refreshingly simple recipe for happiness.' Stylist 'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.' Neil Pasricha, bestselling author of The Happiness Equation
      `,
    },
  },
  {
    _id: 'cbc3cc17-c2be-406f-9ae4-c0a275f2bb9e',
    title: "Life's Amazing Secrets",
    author: 'Gaur Gopal Das',
    img: LifesAmazingSecrets,
    price: 169,
    discountedPrice: 119,
    discountedAmount: calculateDiscountedAmount(169, 119),
    discountedPercentage: calculateDiscountPercentage(169, 119),
    rating: 4.1,
    tag: 'bestseller',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `Life's Amazing Secrets: How to Find Balance and Purpose in Your Life is an engaging philosophical book that deals with deep and meaningful conversations on life between Gaur Gopal Das himself and his wealthy friend Harry. The conversation ranges from human conditions to finding one’s purpose in life. Whether you are on a journey to discover your true potential in life, looking for ways to strengthen your relationships or keys to stay happy in life, the author takes you through a beautiful journey with his insightful thoughts on these areas of life. Read this book to undertake this journey and discover the real you in the process.

      About the Author
      
      Gaur Gopal Das is a monk whose ideologies and perspectives on ancient philosophy and modernity has made him a life coach to thousands of people around the globe. Das has been travelling the world since 2015 to share his wisdom with several people and corporate companies. He even posts various motivational videos and posts on social media, thereby making him one of the most famous monks in the world. His book, Life’s Amazing Secrets, talks about the different ways by which one can find a balance and purpose in life.`,
    },
  },
  {
    _id: '574ef120-f036-4d8f-aa72-5120cdcf0b9f',
    title: 'Star With Why',
    author: 'Simon Sinek',
    img: StarWithWhy,
    price: 299,
    discountedPrice: 218,
    discountedAmount: calculateDiscountedAmount(299, 218),
    discountedPercentage: calculateDiscountPercentage(299, 218),
    rating: 3.2,
    tag: '',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `The inspirational bestseller that ignited a movement and asked us to find our WHY

      Discover the book that is captivating millions on TikTok and that served as the basis for one of the most popular TED Talks of all time—with more than 56 million views and counting. Over a decade ago, Simon Sinek started a movement that inspired millions to demand purpose at work, to ask what was the WHY of their organization. Since then, millions have been touched by the power of his ideas, and these ideas remain as relevant and timely as ever.
       
      START WITH WHY asks (and answers) the questions: why are some people and organizations more innovative, more influential, and more profitable than others? Why do some command greater loyalty from customers and employees alike? Even among the successful, why are so few able to repeat their success over and over?
       
      People like Martin Luther King Jr., Steve Jobs, and the Wright Brothers had little in common, but they all started with WHY. They realized that people won't truly buy into a product, service, movement, or idea until they understand the WHY behind it. 
       
      START WITH WHY shows that the leaders who have had the greatest influence in the world all think, act and communicate the same way—and it's the opposite of what everyone else does. Sinek calls this powerful idea The Golden Circle, and it provides a framework upon which organizations can be built, movements can be led, and people can be inspired. And it all starts with WHY.`,
    },
  },
  {
    _id: '76a5b816-8a1e-48ed-b5d1-6b30b20408c6',
    title: 'The Power Of Your Subconsious Mind',
    author: 'Murphy Joseph',
    img: ThePowerOfYourSubconsiousMind,
    price: 289,
    discountedPrice: 200,
    discountedAmount: calculateDiscountedAmount(289, 200),
    discountedPercentage: calculateDiscountPercentage(289, 200),
    rating: 4.2,
    tag: 'bestseller',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `This is where this book acts as a guide and allows you to decipher the depths of the sub-conscious. In this book, 'The power of your subconscious mind', the author fuses his spiritual wisdom and scientific research to bring to light how the sub-conscious mind can be a major influence on our daily lives.
      `,
    },
  },
  {
    _id: '89813a31-1f3e-4d76-9db0-da833d3a8969',
    title: 'The Psycology Of Money',
    author: 'Morgan Housel',
    img: ThePsycologyOfMoney,
    price: 699,
    discountedPrice: 600,
    discountedAmount: calculateDiscountedAmount(699, 600),
    discountedPercentage: calculateDiscountPercentage(699, 600),
    rating: 3.9,
    tag: '',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.
      `,
    },
  },
  {
    _id: '27b86a7e-6107-42a3-bb91-f5a51ec45b20',
    title: 'Think And Grow Rich',
    author: 'Napoleon Hil',
    img: ThinkAndGrowRich,
    price: 899,
    discountedPrice: 799,
    discountedAmount: calculateDiscountedAmount(899, 799),
    discountedPercentage: calculateDiscountPercentage(899, 799),
    rating: 3.4,
    tag: '',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `Ever wondered how life would be if we could condition our minds to Think and Grow Rich? Author Napoleon Hill claims to have based this book on twenty years of rigorous research on the lives of those who had amassed great wealth and made a fortune. Observing their habits, their ways of working and the principles they followed, Hill put together laws and philosophies that can be practiced in everyday life to achieve all-round success. The narrative is rich with stories and anecdotes, which not only inspire, but also show a way forward to take action. After all, riches are not just material, but also pertaining to the mind, body and spirit. Having sold more than fifteen million copies across the world, this book remains the most read self-improvement book of all times!||About the Author: Napoleon Hill came to be seen as a multi-faceted personality, excelling in many fields like lectureship, writing and journalism. He is best known as the author of selfimprovement books that share time-tested techniques and laws that help achieve your goals.
      `,
    },
  },
  {
    _id: '0e22603f-bb43-4d5d-b06e-b9f003bd49c8',
    title: 'Think Like A Monk',
    author: 'Jay Shetty',
    img: ThinkLikeAMonk,
    price: 459,
    discountedPrice: 323,
    discountedAmount: calculateDiscountedAmount(459, 323),
    discountedPercentage: calculateDiscountPercentage(459, 323),
    rating: 4.5,
    tag: 'bestseller',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `Jay Shetty, social media superstar and host of the #1 podcast ‘On Purpose’, distils the timeless wisdom he learned as a practising monk into practical steps anyone can take every day to live a less anxious, more meaningful life. Over the past three years, Jay Shetty has become one of the world’s most popular influencers. One of his clips was the most watched video on Facebook last year, with over 360 million views. His social media following totals over 32 million, he has produced over 400 viral videos, which have amassed more than 5 billion views, and his podcast, ‘On Purpose’, is consistently ranked the world’s #1 health-related podcast. In this inspiring, empowering book, Shetty draws on his time as a monk in the Vedic tradition to show us how we can clear the roadblocks to our potential and power. Drawing on ancient wisdom and his own rich experiences in the ashram, “Think Like a Monk” reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us. The lessons monks learn are profound but often abstract. Shetty transforms them into advice and exercises we can all apply to reduce stress, improve focus, improve relationships, identify our hidden abilities, increase self-discipline and give the gifts we find in ourselves to the world. Shetty proves that everyone can – and should – think like a monk.
      `,
    },
  },
  {
    _id: 'd03d6a14-d2b0-424f-9cd9-5d9208a00450',
    title: 'Beleive In Yourself',
    author: 'Joseph Murphy',
    img: BeleiveInYourself,
    price: 799,
    discountedPrice: 299,
    discountedAmount: calculateDiscountedAmount(799, 299),
    discountedPercentage: calculateDiscountPercentage(799, 299),
    rating: 1.4,
    tag: '',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `In Believe in Yourself, Dr. Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream, come what may. The book was first published in 1955 but remains as popular as it was then. Being a preacher, with decades of experience behind him, Dr Murphy delves into lives of people to demonstrate the all encompassing power of self. By citing interesting episodes from the lives of artists, writers, entrepreneurs and ordinary people, who achieved acclaim and success, the author goes on to emphasize that one thread that runs through was a strong belief in oneself. The book has proved highly motivational and has enabled many readers to overcome low self esteem and achieve their objectives in life. The author points out various ways by which one can overcome defeat, hardships and keep on the righteous track to succeed by using only fair means. People who are low in confidence, need a direction in life or a guiding light to keep them motivated makes this subjective compulsion a key to success for any individual says the author.
      `,
    },
  },
  {
    _id: 'a884c24c-d278-489e-8197-bc686eea4e27',
    title: 'Atomic Habits',
    author: 'James Clear',
    img: AtomicHabits,
    price: 499,
    discountedPrice: 393,
    discountedAmount: calculateDiscountedAmount(499, 393),
    discountedPercentage: calculateDiscountPercentage(499, 393),
    rating: 4.8,
    tag: 'bestseller',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less. ’ Mark Manson, author of The Subtle Art of Not Giving A F*ck People say when you want to change your life, you need to set big goals. But they’re wrong. World-renowned habits expert James Clear has discovered a simpler system for transforming your life. He knows that lasting change comes from the compound effect of hundreds of small decisions – doing two push-ups a day, waking up five minutes early, or holding a single short phone call. He calls them atomic habits. In this ground-breaking book, Clear reveals how these tiny changes will help you get 1 percent better every day. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone) and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs and distinguished scientists who have used the science of small habits to stay productive, motivated and happy. These small changes will have a revolutionary effect on your career, your relationships and your life. ‘James Clear has spent years honing the art and studying the science of habits. This engaging, hands-on book is the guide you need to break bad routines and make good ones. ’ Adam Grant, author of Originals‘A special book that will change how you approach your day and live your life. ’ Ryan Holiday, author of The Obstacle is the Way`,
    },
  },
  {
    _id: '588aa9ad-2c29-4d9c-a82a-8c7f526717ce',
    title: 'Mindset',
    author: 'Dr Carol Dweck ',
    img: Mindset,
    price: 199,
    discountedPrice: 129,
    discountedAmount: calculateDiscountedAmount(199, 129),
    discountedPercentage: calculateDiscountPercentage(199, 129),
    rating: 2.4,
    tag: 'new',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.Dweck explains why it's not just our abilities and talent that bring us success-but whether we approach them with a fixed or growth mindset. She makes clear why praising intelligence and ability doesn't foster self-esteem and lead to accomplishment, but may actually jeopardize success. With the right mindset, we can motivate our kids and help them to raise their grades, as well as reach our own goals-personal and professional. Dweck reveals what all great parents, teachers, CEOs, and athletes already know: how a simple idea about the brain can create a love of learning and a resilience that is the basis of great accomplishment in every area.
      `,
    },
  },
  {
    _id: '4141073f-491f-4275-b5dd-5c698470fa2a',
    title: 'Chanakya In DailyLife',
    author: 'Radhakrishnan Pillai',
    img: ChanakyaInDailyLife,
    price: 756,
    discountedPrice: 399,
    discountedAmount: calculateDiscountedAmount(756, 399),
    discountedPercentage: calculateDiscountPercentage(756, 399),
    rating: 2.7,
    tag: '',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `Radhakrishnan Pillai is the bestselling author of Corporate Chanakya, among many other widely read books. In this book, Chanakya in Daily Life, Pillai simplifies the teachings of Chanakya and shows us how we can use them in daily life in an easy-to-follow manner. Pillai is revered across the country not only as an author but also as a motivational speaker. This book is highly anticipated by all his followers as it is the first one that covers topics outside of ones professional life and has a holistic approach towards helping the reader tackle problems that they face on every front.
      `,
    },
  },
  {
    _id: 'afaafda1-d861-4792-b579-5751a8118f4f',
    title: 'Attached',
    author: 'Amir Levine',
    img: Attached,
    price: 366,
    discountedPrice: 323,
    discountedAmount: calculateDiscountedAmount(366, 323),
    discountedPercentage: calculateDiscountPercentage(366, 323),
    rating: 3.2,
    tag: 'new',
    categoryName: ['self-help', 'non-fiction'],
    bookInfo: {
      summary: `'A groundbreaking book that redefines what it means to be in a relationship.' - John Gray, PhD., bestselling author of Men Are from Mars, Women Are from Venus An insightful look at the science behind love, Attached offers readers a road map for building stronger, more fulfilling connections. Is there a science to love? In this groundbreaking book, psychiatrist and neuroscientist Amir Levine and psychologist Rachel S. F. Heller reveal how an understanding of attachment theory - the most advanced relationship science in existence today - can help us find and sustain love. Pioneered by psychologist John Bowlby in the 1950s, the field of attachment explains that each of us behaves in relationships in one of three distinct ways: Anxious people are often preoccupied with their relationships and tend to worry about their partner's ability to love them back. Avoidant people equate intimacy with a loss of independence and constantly try to minimize closeness. Secure people feel comfortable with intimacy and are usually warm and loving. With fascinating psychological insight, quizzes and case studies, Dr Amir Levine and Rachel Heller help you understand the three attachment styles, identify your own and recognize the styles of others so that you can find compatible partners or improve your existing relationship.
      `,
    },
  },
];
