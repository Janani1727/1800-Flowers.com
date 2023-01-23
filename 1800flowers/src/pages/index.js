import ReactStars from "react-stars";
import React, { useState, useEffect } from "react";
import styles from "../styles/Index.module.css";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  Box,
  Center,
  Collapse,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";

const data = [
  {
    id: 1,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5eb232318d3a6d1e/637e8388deb37610ecbb8e31/flower-delivery-same-day-silo-167891-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
    title: "Same Day Flower Delivery",
  },
  {
    id: 2,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt26149ee749ecd0f3/62b5c27fa7c4490fd2ef03ef/magnificent-preserved-roses-silo-156623-260x284.jpeg?auto=webp&optimize={medium}",
    title: "Love & Romance",
  },
  {
    id: 3,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?auto=webp&optimize={medium}",
    title: "Get Well",
  },
  {
    id: 4,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt358c381bc15c10ef/63bdb18a2effe86502073b30/chocolate-covered-strawberries-delivery-silo-192546-260x284.jpg?auto=webp&optimize={medium}",
    title: "Chocolate Covered Strawberries",
  },
  {
    id: 5,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt180dd3fd2c5f4596/63bdb1a3ee0cf115ce1fc07c/just-because-flowers-silo-90577mprsv1-260x284.jpg?auto=webp&optimize={medium}",
    title: "Just Because",
  },
  {
    id: 6,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcd2ef4bf9ed156ee/632de66c5710672259b3c66b/new-baby-flowers-silo-177706yw-260x284.jpg?auto=webp&optimize={medium}",
    title: "New Baby",
  },
];

const offer = [
  {
    id: 1,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2a407a6a54d38487/63c1ce615156964aea4347db/funeral-arrangements-silo-148752-260x284.jpg?auto=webp&optimize={medium}",
    title: "Funeral Arrangements",
  },
  {
    id: 2,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?auto=webp&optimize={medium}",
    title: "For the Family",
  },
  {
    id: 3,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltea2dacf314796c21/63c1ce906bf00e62d437f92d/sympathy-plants-silo-101980-260x284.jpeg?auto=webp&optimize={medium}",
    title: "Plants",
  },
  {
    id: 4,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7c9e9d4a2198fa1e/63c1ceb606d8a07b811ae1e3/sympathy-same-day-delivery-silo-148685-260x284.jpg?auto=webp&optimize={medium}",
    title: "Same-Day Delivery",
  },
  {
    id: 5,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5dcd51ccaacd3721/63c1ceef881b107c49c5e885/gift-baskets-sympathy-silo-96275dx-260x284.jpg?auto=webp&optimize={medium}",
    title: "Gift Baskets",
  },
  {
    id: 6,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1e51da89f5d53b69/63c1cf15e6cd4a7779d9f21b/sympathy-remembrance-gifts-silo-97343l-260x284.jpg?auto=webp&optimize={medium}",
    title: "Remembrance Gifts",
  },
];

const comfort = [
  {
    id: 1,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?auto=webp&optimize={medium}",
    title: "Spa Gifts",
  },
  {
    id: 2,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?auto=webp&optimize={medium}",
    title: "Candles & Lanterns",
  },
  {
    id: 3,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?auto=webp&optimize={medium}",
    title: "Gifts Under $25",
  },
  {
    id: 4,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?auto=webp&optimize={medium}",
    title: "Zen & Relaxation",
  },
  {
    id: 5,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?auto=webp&optimize={medium}",
    title: "Lavender Gifts",
  },
  {
    id: 6,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?auto=webp&optimize={medium}",
    title: "Cozy Comfort",
  },
];

const flowerMoment = [
  {
    id: 1,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte2a16fdd5ffe3f9b/63a6027fd70a0827292d3e8f/ugc-image-charming-garden-bouquet.jpg?auto=webp&optimize={medium}",
  },
  {
    id: 2,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltea45456133e4ec47/63a602e7eee5ef585b469cab/ugc-image-peperomia-baby-rubber-plant.jpg?auto=webp&optimize={medium}",
  },
  {
    id: 3,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e6ea64769f54f55/63a603239d04dd206dffc01d/ugc-image-lovely-lavender-medley-winter.jpg?auto=webp&optimize={medium}",
  },
  {
    id: 4,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt19f3d333358d845a/63a6035320e5a54e6ea886ac/ugc-image-magnificent-roses-preserved-blue-velvet-roses.jpg?auto=webp&optimize={medium}",
  },
];

const trending = [
  {
    id: 1,
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipez.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Floral Embrace™",
    price: "Starting From $39.99",
  },
  {
    id: 2,
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlz.jpg?quality=75&auto=webp&optimize={medium}",

    title: "Daydream Bouquet™ ",
    price: "Starting From $49.99",
  },
  {
    id: 3,
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/100547sbdv3ch29z.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Two Dozen Assorte...",
    price: "Starting From $54.99",
  },
  {
    id: 4,
    image:
      "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlz.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Garden of Grandeu...",
    price: " Starting From $74.99",
  },
  {
    id: 5,
    image:
      "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch31z.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Two Dozen Red Ro...",
    price: "Starting From $59.99",
  },
  {
    id: 6,
    image:
      "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/158086lgwcz.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Graceful Gardenia",
    price: "Starting From $39.99",
  },
  {
    id: 7,
    image:
      "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlz.jpg?quality=75&auto=webp&optimize={medium}",
    title: "Lovely Lavender M...",
    price: "Starting From $49.99",
  },
];

const aboutUs = [
  {
    id: 1,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}",
    title: "Beautiful",
    description:
      "I bought these for my Nana's birthday she said they were amazingly beautiful!",
    author: "-Pamela",
  },
  {
    id: 2,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}",
    title: "Beautiful",
    description:
      "These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen!",
    author: "-Michelle",
  },
  {
    id: 3,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltfff372650000728b/6259ada700a8bb4b77960c3b/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}",
    title: "Beautiful",
    description:
      "I bought these for my Nana's birthday she said they were amazingly beautiful!",
    author: "-Betty",
  },
  {
    id: 4,
    image:
      "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}",
    title: "Beautiful",
    description:
      "I bought these for my Nana's birthday she said they were amazingly beautiful!",
    author: "-Brian",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Head>
        <title>Blossom.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" />
      </Head>
      <div style={{ marginTop: "200px" }}>
        <div className={styles.banner1}>
          <img
            className={styles.im}
            style={{ width: "100%" }}
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0e98fd147de5199a/631a53cd10c00a57bb0cd53d/birthday-flowers-hero-fy23-fall.jpg?quality=75&auto=webp&optimize={medium}"
          />
        </div>
        <div>
          <h1 className={styles.htag}>Send Flowers & Exclusive Gift</h1>
          <div className={styles.send}>
            {data.map((dat) => (
              <div style={{ textAlign: "center", width: "100%" }} key={dat.id}>
                <img style={{ width: "100%" }} src={dat.image} />
                <p>{dat.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0 40px 0",
          }}
        >
          <img style={{ width: "80%" }} src="./banner1.PNG" />
        </div>

        <div>
          <h1 className={styles.htag}>
            Offer Comfort With Sympathy Flowers & Gifts
          </h1>
          <div className={styles.send}>
            {offer.map((dat) => (
              <div style={{ textAlign: "center", width: "100%" }} key={dat.id}>
                <img style={{ width: "100%" }} src={dat.image} />
                <p>{dat.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.twoimage}>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4e2cd58eaa3200f8/63afaf864efa494a5213dfdd/orchid-flowers-foty-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt68280c5448a46856/63afafc33d631e106c3e825a/calathea-rattlesnake-poty-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0 40px 0",
          }}
        >
          <img style={{ width: "80%" }} src="./banner2.PNG" />
        </div>
        <div>
          <h1 className={styles.htag}>Explore Our Self-Care Essentials</h1>
          <div className={styles.send}>
            {comfort.map((dat) => (
              <div style={{ textAlign: "center", width: "100%" }} key={dat.id}>
                <img style={{ width: "100%" }} src={dat.image} />
                <p>{dat.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.htranding}>Trending Flowers & Gifts</h1>
          <div className={styles.trendiv}>
            <div>
              {trending.map((dat) => (
                <div style={{ textAlign: "center" }} key={dat.id}>
                  <img src={dat.image} />
                  <p style={{ fontSize: "13px", textAlign: "left" }}>
                    {dat.title}
                  </p>
                  <p
                    style={{
                      color: "green",
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                  >
                    {dat.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 0 40px 0",
          }}
        >
          <img style={{ width: "94%" }} src="./banner3.PNG" />
        </div>

        <h1 className={styles.htagShare}>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4661dd99d6401481/60184a440f1c0c1aa6f87986/instagram-icon.svg?quality=75&auto=webp&optimize={medium}" />
          Share Your #MadeMeSmile Flowers Moment
        </h1>
        <div className={styles.divshare}>
          <div>
            {flowerMoment.map((dat) => (
              <div style={{ textAlign: "center" }} key={dat.id}>
                <img src={dat.image} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.htagsome}>
            Some of the Great Things Our Customers Say About Us
          </h1>
          <div className={styles.somediv}>
            {aboutUs.map((dat) => (
              <div key={dat.id}>
                <img
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                  src={dat.image}
                />
                <Center>
                  <ReactStars count={5} size={24} />
                </Center>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {dat.title}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    fontWeight: "400",
                  }}
                >
                  {dat.description}
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {dat.author}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span style={{ color: "blue", display: "flex", marginRight: "4px" }}>
            Powered by
          </span>
          <img
            className={styles.powerimage}
            src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcf637a6e16efdb8e/5ea9acbed4b10d15d3e8cfb3/yotpo-logo.png?quality=70&auto=webp&optimize={medium}"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 40px 0",
          }}
        >
          <img src="./banner4.PNG" />
        </div>
        <Center>
          <Heading
            as="h3"
            size="md"
            style={{ cursor: "pointer" }}
            onClick={onToggle}
          >
            More About Our Flower Delivery
            <span style={{ width: "5%" }}>-</span>
          </Heading>
        </Center>
        <Collapse in={!isOpen} animateOpacity>
          <Box p="40px" color="black" mt="4" rounded="md" shadow="md">
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Send Flowers Online with Flower Delivery by 1-800-Flowers.com, the
              Worlds Favorite Florist!
            </Heading>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              Theres no better place to order flowers online than
              1-800-Flowers.com. Whether youre looking to buy flowers and gifts
              like roses, orchids, gift baskets, bonsai trees, flowering plants
              or wedding bouquets, we have the highest quality blooms and the
              most talented florists who can create exactly what you order.
              Dazzle and delight your loved ones wherever they may be with truly
              original flowers and gifts from 1-800-Flowers.com.
            </p>
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Quick Flower Delivery and Great Customer Service
            </Heading>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              Same-day flower delivery is available every day, for all seasons:
              spring, winter, summer and fall. To send flowers for same-day
              delivery, all you have to do is place your order by the following
              times in the gift receivers time zone: 2:30 p.m. weekdays, 1:15
              p.m. Saturdays, and 11:45 a.m. Sundays. Our customer service team
              is standing by to help you with any gift or flower order. Whether
              youre sending red roses to your sweetie, celebrating a birthday,
              or sending a get well gift to someone feeling under the weather,
              if you have questions, our team has answers! Just call
              1-800-356-9377 or place an order for flower delivery online. We
              will help you find and deliver the perfect flowers, plants, or
              gift to celebrate lifes most meaningful moments - from birthday
              gift recommendations, to anniversary floral arrangements she is
              sure to love.
            </p>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              For sympathy gifts and funeral flowers, our team of experienced
              Sympathy Advisors are ready to assist you at 1-866-538-2259.
            </p>
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Order the Best Flowers Online for All Occasions and Holidays
            </Heading>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              Were the best choice when shopping online for gifts and flowers
              just because, or for special occasions like Mothers Day or
              Valentines Day. Choose the perfect gift from the best selection of
              flower arrangements, roses, mixed bouquets, fruit arrangements,
              gourmet baskets, and other gifts. With a wide variety of colors,
              sizes and seasonal themes, you can buy flowers and gifts for
              everyone. With same-day gift delivery, were also your source for
              last-minute gifts, too!
            </p>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              Deliver smiles all year long with Free Shipping/No Service Charge
              on all your flowers & gifts when you join the Celebrations
              Passport® program.
            </p>
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Send Flowers Internationally
            </Heading>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              We deliver flowers across the United States and around the world.
              If you want to send flowers internationally, trust us to deliver
              your most heartfelt messages. Because of our partnerships with
              local florists and flower growers, we are able to ensure that
              bouquets are delivered fresh from the field and on time. Our
              flower arrangements are artfully created and delivered perfectly
              arranged by professional florists.
            </p>
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Fresh Flowers Guaranteed by Trusted Florists
            </Heading>
            <p style={{ padding: "10px", fontSize: "14px" }}>
              In 1976, Jim McCann, founder of 1-800-Flowers.com, opened his
              first retail florist shop and forever changed the way people buy
              flowers for birthdays, anniversaries, and other special occasions.
              For more than 40 years, our passion has been to help you connect
              and express yourself to the important people in your life by
              providing the finest selection of beautiful flowers and
              arrangements available for same day or next day delivery, from
              roses and orchids to tulips, carnations, and daisies. With quality
              supported by our 100% Satisfaction Guarantee, you can also find
              plants, gift baskets, gourmet foods, and stuffed animals that are
              perfect for every occasion. Ranked consecutively on the Top 1000
              list of North America’s Leading Online Retailers by Digital
              Commerce 360, 1-800-FLOWERS.COM, Inc. is proud to offer solutions
              for every gifting need, whether youre looking for flower delivery
              across town or across the country.
            </p>
            <Heading as="h4" size="14px" bg="#E8EAEC" p="10px">
              Trending Flowers News & Articles from Our Flower Blog, Petal Talk:
            </Heading>

            <ul
              style={{ padding: "10px", fontSize: "14px", marginLeft: "20px" }}
            >
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  Flower Color Meanings
                </span>
              </li>
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  Best Plant Care Tips from Our Plant Corner
                </span>
              </li>
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  Different Types of Flowers with Pictures
                </span>
              </li>
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  Thoughtful Sympathy Card Message Ideas
                </span>
              </li>
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  Zodiac Flowers by Your Sign
                </span>
              </li>
              <li>
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  {" "}
                  How to Preserve Flowers in WaxHow to Preserve Flowers in Wax
                </span>
              </li>
            </ul>
          </Box>
        </Collapse>
        <div
          style={{
            float: "right",
            border: "1px solid black",
            marginRight: "20px",
            backgroundColor: "white",
            borderRadius: "square",
          }}
        >
          <button
            style={{
              padding: "10px 10px 10px 10px",
              float: "right",
              position: "relative",
            }}
            onClick={() => scrollToTop()}
          >
            <Center>
              <AiOutlineArrowUp />
            </Center>
          </button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
