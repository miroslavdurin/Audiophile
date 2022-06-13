import images from './images';

const {
  xx59PreviewDesktop,
  xx59GalleryOneDesktop,
  xx59GalleryTwoDesktop,
  xx59GalleryThreeDesktop,
  xx59ProductDesktop,
  xx59PreviewTablet,
  xx59GalleryOneTablet,
  xx59GalleryTwoTablet,
  xx59GalleryThreeTablet,
  xx59ProductTablet,
  xx59PreviewMobile,
  xx59GalleryOneMobile,
  xx59GalleryTwoMobile,
  xx59GalleryThreeMobile,
  xx59ProductMobile,
  xx99MarkOnePreviewDesktop,
  xx99MarkOneGalleryOneDesktop,
  xx99MarkOneGalleryTwoDesktop,
  xx99MarkOneGalleryThreeDesktop,
  xx99MarkOneProductDesktop,
  xx99MarkOnePreviewTablet,
  xx99MarkOneGalleryOneTablet,
  xx99MarkOneGalleryTwoTablet,
  xx99MarkOneGalleryThreeTablet,
  xx99MarkOneProductTablet,
  xx99MarkOnePreviewMobile,
  xx99MarkOneGalleryOneMobile,
  xx99MarkOneGalleryTwoMobile,
  xx99MarkOneGalleryThreeMobile,
  xx99MarkOneProductMobile,
  xx99MarkTwoPreviewDesktop,
  xx99MarkTwoGalleryOneDesktop,
  xx99MarkTwoGalleryTwoDesktop,
  xx99MarkTwoGalleryThreeDesktop,
  xx99MarkTwoProductDesktop,
  xx99MarkTwoPreviewTablet,
  xx99MarkTwoGalleryOneTablet,
  xx99MarkTwoGalleryTwoTablet,
  xx99MarkTwoGalleryThreeTablet,
  xx99MarkTwoProductTablet,
  xx99MarkTwoPreviewMobile,
  xx99MarkTwoGalleryOneMobile,
  xx99MarkTwoGalleryTwoMobile,
  xx99MarkTwoGalleryThreeMobile,
  xx99MarkTwoProductMobile,
  yx1PreviewDesktop,
  yx1GalleryOneDesktop,
  yx1GalleryTwoDesktop,
  yx1GalleryThreeDesktop,
  yx1ProductDesktop,
  yx1PreviewTablet,
  yx1GalleryOneTablet,
  yx1GalleryTwoTablet,
  yx1GalleryThreeTablet,
  yx1ProductTablet,
  yx1PreviewMobile,
  yx1GalleryOneMobile,
  yx1GalleryTwoMobile,
  yx1GalleryThreeMobile,
  yx1ProductMobile,
  zx7PreviewDesktop,
  zx7GalleryOneDesktop,
  zx7GalleryTwoDesktop,
  zx7GalleryThreeDesktop,
  zx7ProductDesktop,
  zx7PreviewTablet,
  zx7GalleryOneTablet,
  zx7GalleryTwoTablet,
  zx7GalleryThreeTablet,
  zx7ProductTablet,
  zx7PreviewMobile,
  zx7GalleryOneMobile,
  zx7GalleryTwoMobile,
  zx7GalleryThreeMobile,
  zx7ProductMobile,
  zx9PreviewDesktop,
  zx9GalleryOneDesktop,
  zx9GalleryTwoDesktop,
  zx9GalleryThreeDesktop,
  zx9ProductDesktop,
  zx9PreviewTablet,
  zx9GalleryOneTablet,
  zx9GalleryTwoTablet,
  zx9GalleryThreeTablet,
  zx9ProductTablet,
  zx9PreviewMobile,
  zx9GalleryOneMobile,
  zx9GalleryTwoMobile,
  zx9GalleryThreeMobile,
  zx9ProductMobile,
  sharedXx59Desktop,
  sharedZx9Desktop,
  sharedXx99MarkOneDesktop,
  sharedXx99MarkTwoDesktop,
  sharedZx7Desktop,
  sharedXx59Tablet,
  sharedXx99MarkOneTablet,
  sharedXx99MarkTwoTablet,
  sharedZx7Tablet,
  sharedZx9Tablet,
  sharedXx59Mobile,
  sharedXx99MarkOneMobile,
  sharedXx99MarkTwoMobile,
  sharedZx7Mobile,
  sharedZx9Mobile,
  cartXx59,
  cartXx99MarkOne,
  cartXx99MarkTwo,
  cartYx1,
  cartZx7,
  cartZx9 } = images;

const yx1Data = {
    id: 1,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    nameShort: 'YX1',
    cartImage: cartYx1,
    image: {
      mobile: yx1ProductMobile,
      tablet: yx1ProductTablet,
      desktop: yx1ProductDesktop
    },
    category: "earphones",
    categoryImage: {
      mobile: yx1PreviewMobile,
      tablet: yx1PreviewTablet,
      desktop: yx1PreviewDesktop
    },
    new: true,
    price: 599,
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      {
        quantity: 2,
        item: "Earphone unit"
      },
      {
        quantity: 6,
        item: "Multi-size earplugs"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "USB-C charging cable"
      },
      {
        quantity: 1,
        item: "Travel pouch"
      }
    ],
    gallery: {
      first: {
        mobile: yx1GalleryOneMobile,
        tablet: yx1GalleryOneTablet,
        desktop: yx1GalleryOneDesktop
      },
      second: {
        mobile: yx1GalleryTwoMobile,
        tablet: yx1GalleryTwoTablet,
        desktop: yx1GalleryTwoDesktop
      },
      third: {
        mobile: yx1GalleryThreeMobile,
        tablet: yx1GalleryThreeTablet,
        desktop: yx1GalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: sharedXx99MarkOneMobile,
          tablet: sharedXx99MarkOneTablet,
          desktop: sharedXx99MarkOneDesktop
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: sharedXx59Mobile,
          tablet: sharedXx59Tablet,
          desktop: sharedXx59Desktop
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: sharedZx9Mobile,
          tablet: sharedZx9Tablet,
          desktop: sharedZx9Desktop
        }
      }
    ]
}

const xx59Data = {
    id: 2,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    nameShort: 'XX59',
    cartImage: cartXx59,
    image: {
      mobile: xx59ProductMobile,
      tablet: xx59ProductTablet,
      desktop: xx59ProductDesktop
    },
    category: "headphones",
    categoryImage: {
      mobile: xx59PreviewMobile,
      tablet: xx59PreviewTablet,
      desktop: xx59PreviewDesktop
    },
    new: false,
    price: 899,
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit"
      },
      {
        quantity: 2,
        item: "Replacement earcups"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable"
      }
    ],
    gallery: {
      first: {
        mobile: xx59GalleryOneMobile,
        tablet: xx59GalleryOneTablet,
        desktop: xx59GalleryOneDesktop
      },
      second: {
        mobile: xx59GalleryTwoMobile,
        tablet: xx59GalleryTwoTablet,
        desktop: xx59GalleryTwoDesktop
      },
      third: {
        mobile: xx59GalleryThreeMobile,
        tablet: xx59GalleryThreeTablet,
        desktop: xx59GalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: sharedXx99MarkTwoMobile,
          tablet: sharedXx99MarkTwoTablet,
          desktop: sharedXx99MarkTwoDesktop
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: sharedXx99MarkOneMobile,
          tablet: sharedXx99MarkOneTablet,
          desktop: sharedXx99MarkOneDesktop
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: sharedZx9Mobile,
          tablet: sharedZx9Tablet,
          desktop: sharedZx9Desktop
        }
      }
    ]
}

const xx99MarkOneData = {
    id: 3,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    nameShort: 'XX99 MK I',
    cartImage: cartXx99MarkOne,
    image: {
      mobile: xx99MarkOneProductMobile,
      tablet: xx99MarkOneProductTablet,
      desktop: xx99MarkOneProductDesktop
    },
    category: "headphones",
    categoryImage: {
      mobile: xx99MarkOnePreviewMobile,
      tablet: xx99MarkOnePreviewTablet,
      desktop: xx99MarkOnePreviewDesktop
    },
    new: false,
    price: 1750,
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit"
      },
      {
        quantity: 2,
        item: "Replacement earcups"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable"
      }
    ],
    gallery: {
      first: {
        mobile: xx99MarkOneGalleryOneMobile,
        tablet: xx99MarkOneGalleryOneTablet,
        desktop: xx99MarkOneGalleryOneDesktop
      },
      second: {
        mobile: xx99MarkOneGalleryTwoMobile,
        tablet: xx99MarkOneGalleryTwoTablet,
        desktop: xx99MarkOneGalleryTwoDesktop
      },
      third: {
        mobile: xx99MarkOneGalleryThreeMobile,
        tablet: xx99MarkOneGalleryThreeTablet,
        desktop: xx99MarkOneGalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: sharedXx99MarkTwoMobile,
          tablet: sharedXx99MarkTwoTablet,
          desktop: sharedXx99MarkTwoDesktop
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: sharedXx59Mobile,
          tablet: sharedXx59Tablet,
          desktop: sharedXx59Desktop
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: sharedZx9Mobile,
          tablet: sharedZx9Tablet,
          desktop: sharedZx9Desktop
        }
      }
    ]
}

const xx99MarkTwoData = {
    id: 4,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    nameShort : 'XX99 MK II',
    cartImage: cartXx99MarkTwo,
    image: {
      mobile: xx99MarkTwoProductMobile,
      tablet: xx99MarkTwoProductTablet,
      desktop: xx99MarkTwoProductDesktop
    },
    category: "headphones",
    categoryImage: {
      mobile: xx99MarkTwoPreviewMobile,
      tablet: xx99MarkTwoPreviewTablet,
      desktop: xx99MarkTwoPreviewDesktop
    },
    new: true,
    price: 2999,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit"
      },
      {
        quantity: 2,
        item: "Replacement earcups"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable"
      },
      {
        quantity: 1,
        item: "Travel bag"
      }
    ],
    gallery: {
      first: {
        mobile: xx99MarkTwoGalleryOneMobile,
        tablet: xx99MarkTwoGalleryOneTablet,
        desktop: xx99MarkTwoGalleryOneDesktop
      },
      second: {
        mobile: xx99MarkTwoGalleryTwoMobile,
        tablet: xx99MarkTwoGalleryTwoTablet,
        desktop: xx99MarkTwoGalleryTwoDesktop
      },
      third: {
        mobile: xx99MarkTwoGalleryThreeMobile,
        tablet: xx99MarkTwoGalleryThreeTablet,
        desktop: xx99MarkTwoGalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: sharedXx99MarkOneMobile,
          tablet: sharedXx99MarkOneTablet,
          desktop: sharedXx99MarkOneDesktop
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: sharedXx59Mobile,
          tablet: sharedXx59Tablet,
          desktop: sharedXx59Desktop
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: sharedZx9Mobile,
          tablet: sharedZx9Tablet,
          desktop: sharedZx9Desktop
        }
      }
    ]
}

const zx7Data = {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    nameShort: "ZX7",
    cartImage: cartZx7,
    image: {
      mobile: zx7ProductMobile,
      tablet: zx7ProductTablet,
      desktop: zx7ProductDesktop
    },
    category: "speakers",
    categoryImage: {
      mobile: zx7PreviewMobile,
      tablet: zx7PreviewTablet,
      desktop: zx7PreviewDesktop
    },
    new: false,
    price: 3500,
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit"
      },
      {
        quantity: 2,
        item: "Speaker cloth panel"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable"
      },
      {
        quantity: 1,
        item: "7.5m optical cable"
      }
    ],
    gallery: {
      first: {
        mobile: zx7GalleryOneMobile,
        tablet: zx7GalleryOneTablet,
        desktop: zx7GalleryOneDesktop
      },
      second: {
        mobile: zx7GalleryTwoMobile,
        tablet: zx7GalleryTwoTablet,
        desktop: zx7GalleryTwoDesktop
      },
      third: {
        mobile: zx7GalleryThreeMobile,
        tablet: zx7GalleryThreeTablet,
        desktop: zx7GalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: sharedZx9Mobile,
          tablet: sharedZx9Tablet,
          desktop: sharedZx9Desktop
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: sharedXx99MarkOneMobile,
          tablet: sharedXx99MarkOneTablet,
          desktop: sharedXx99MarkOneDesktop
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: sharedXx59Mobile,
          tablet: sharedXx59Tablet,
          desktop: sharedXx59Desktop
        }
      }
    ]
}

const zx9Data = {
    id: 6,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    nameShort: "ZX9",
    cartImage: cartZx9,
    image: {
      mobile: zx9ProductMobile,
      tablet: zx9ProductTablet,
      desktop: zx9ProductDesktop
    },
    category: "speakers",
    categoryImage: {
      mobile: zx9PreviewMobile,
      tablet: zx9PreviewTablet,
      desktop: zx9PreviewDesktop
    },
    new: true,
    price: 4500,
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit"
      },
      {
        quantity: 2,
        item: "Speaker cloth panel"
      },
      {
        quantity: 1,
        item: "User manual"
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable"
      },
      {
        quantity: 1,
        item: "10m optical cable"
      }
    ],
    gallery: {
      first: {
        mobile: zx9GalleryOneMobile,
        tablet: zx9GalleryOneTablet,
        desktop: zx9GalleryOneDesktop
      },
      second: {
        mobile: zx9GalleryTwoMobile,
        tablet: zx9GalleryTwoTablet,
        desktop: zx9GalleryTwoDesktop
      },
      third: {
        mobile: zx9GalleryThreeMobile,
        tablet: zx9GalleryThreeTablet,
        desktop: zx9GalleryThreeDesktop
      }
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: sharedZx7Mobile,
          tablet: sharedZx7Tablet,
          desktop: sharedZx7Desktop
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: sharedXx99MarkOneMobile,
          tablet: sharedXx99MarkOneTablet,
          desktop: sharedXx99MarkOneDesktop
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: sharedXx59Mobile,
          tablet: sharedXx59Tablet,
          desktop: sharedXx59Desktop
        }
      }
    ]
}
 
export default {
    yx1Data,
    xx99MarkTwoData,
    xx99MarkOneData,
    xx59Data,
    zx9Data,
    zx7Data,
    
} 