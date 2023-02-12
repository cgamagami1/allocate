import { useEffect, useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import Page from "../../components/Page";
import Article from "./Article";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com"
	}
};

const responseObj = {
  "data": [
      {
          "id": "4577204",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T05:13:27-05:00",
              "isLockedPro": false,
              "commentCount": 138,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1169427542/image_1169427542.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "long-ideas": {
                      "title": "Long Ideas",
                      "slug": "long-ideas"
                  }
              },
              "title": "Google: I Never Bought More Aggressively Than Now",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "106400",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436905",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "544",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "148893",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "613735",
                          "type": "tag"
                      },
                      {
                          "id": "1936",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577204-google-stock-annual-earnings-power-cash-per-share-bargain"
          }
      },
      {
          "id": "4577284",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T11:24:20-05:00",
              "isLockedPro": false,
              "commentCount": 89,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1140204814/image_1140204814.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "long-ideas": {
                      "title": "Long Ideas",
                      "slug": "long-ideas"
                  }
              },
              "title": "I Called The Tesla Bottom At $100 - Here's Where I'm Buying Back In",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "102870",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "437098",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "16123",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "572864",
                          "type": "tag"
                      },
                      {
                          "id": "1936",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "615773",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577284-i-called-the-tesla-bottom-at-100-heres-where-im-buying-back-in"
          }
      },
      {
          "id": "4576768",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:15:00-05:00",
              "isLockedPro": false,
              "commentCount": 26,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1387313039/image_1387313039.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "2 Great Dividends To Retire In Safety And Splendor",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "96726",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": []
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "10023",
                          "type": "tag"
                      },
                      {
                          "id": "582314",
                          "type": "tag"
                      },
                      {
                          "id": "582315",
                          "type": "tag"
                      },
                      {
                          "id": "582316",
                          "type": "tag"
                      },
                      {
                          "id": "504376",
                          "type": "tag"
                      },
                      {
                          "id": "607330",
                          "type": "tag"
                      },
                      {
                          "id": "598631",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "548716",
                          "type": "tag"
                      },
                      {
                          "id": "598855",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "150933",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4576768-2-great-dividends-to-retire-in-safety-and-splendor"
          }
      },
      {
          "id": "4576417",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:50:00-05:00",
              "isLockedPro": false,
              "commentCount": 49,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1016186674/image_1016186674.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "5 Dividend ETFs That Could Change Your Life And The World",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "101900",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": []
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "578471",
                          "type": "tag"
                      },
                      {
                          "id": "34983",
                          "type": "tag"
                      },
                      {
                          "id": "14973",
                          "type": "tag"
                      },
                      {
                          "id": "34688",
                          "type": "tag"
                      },
                      {
                          "id": "2848",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "568750",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4576417-5-dividend-etfs-that-could-change-your-life-and-the-world"
          }
      },
      {
          "id": "4576704",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T09:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 0,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1393160219/image_1393160219.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "market-outlook": {
                      "title": "Market Outlook",
                      "slug": "market-outlook"
                  }
              },
              "title": "Sentiment Speaks: Time To Fight The Fed - Rates Are Going Lower In 2023",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "24665",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "332",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "34949",
                          "type": "tag"
                      },
                      {
                          "id": "506",
                          "type": "tag"
                      },
                      {
                          "id": "9082",
                          "type": "tag"
                      },
                      {
                          "id": "12627",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4576704-time-to-fight-the-fed-rates-going-lower-2023"
          }
      },
      {
          "id": "4577266",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T10:20:00-05:00",
              "isLockedPro": false,
              "commentCount": 4,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1367122593/image_1367122593.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "etf-analysis": {
                      "title": "ETF Analysis",
                      "slug": "etf-analysis"
                  }
              },
              "title": "Vanguard ETFs: Recommendations For 2023",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "24573",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": []
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "7303",
                          "type": "tag"
                      },
                      {
                          "id": "1430",
                          "type": "tag"
                      },
                      {
                          "id": "3196",
                          "type": "tag"
                      },
                      {
                          "id": "558876",
                          "type": "tag"
                      },
                      {
                          "id": "3552",
                          "type": "tag"
                      },
                      {
                          "id": "531846",
                          "type": "tag"
                      },
                      {
                          "id": "235245",
                          "type": "tag"
                      },
                      {
                          "id": "235255",
                          "type": "tag"
                      },
                      {
                          "id": "235265",
                          "type": "tag"
                      },
                      {
                          "id": "235275",
                          "type": "tag"
                      },
                      {
                          "id": "15082",
                          "type": "tag"
                      },
                      {
                          "id": "448165",
                          "type": "tag"
                      },
                      {
                          "id": "704",
                          "type": "tag"
                      },
                      {
                          "id": "448345",
                          "type": "tag"
                      },
                      {
                          "id": "567732",
                          "type": "tag"
                      },
                      {
                          "id": "448695",
                          "type": "tag"
                      },
                      {
                          "id": "448725",
                          "type": "tag"
                      },
                      {
                          "id": "582713",
                          "type": "tag"
                      },
                      {
                          "id": "222405",
                          "type": "tag"
                      },
                      {
                          "id": "224555",
                          "type": "tag"
                      },
                      {
                          "id": "449115",
                          "type": "tag"
                      },
                      {
                          "id": "449125",
                          "type": "tag"
                      },
                      {
                          "id": "449135",
                          "type": "tag"
                      },
                      {
                          "id": "309735",
                          "type": "tag"
                      },
                      {
                          "id": "449165",
                          "type": "tag"
                      },
                      {
                          "id": "709",
                          "type": "tag"
                      },
                      {
                          "id": "598627",
                          "type": "tag"
                      },
                      {
                          "id": "199065",
                          "type": "tag"
                      },
                      {
                          "id": "199075",
                          "type": "tag"
                      },
                      {
                          "id": "449275",
                          "type": "tag"
                      },
                      {
                          "id": "449285",
                          "type": "tag"
                      },
                      {
                          "id": "449295",
                          "type": "tag"
                      },
                      {
                          "id": "567306",
                          "type": "tag"
                      },
                      {
                          "id": "449565",
                          "type": "tag"
                      },
                      {
                          "id": "449575",
                          "type": "tag"
                      },
                      {
                          "id": "449645",
                          "type": "tag"
                      },
                      {
                          "id": "449655",
                          "type": "tag"
                      },
                      {
                          "id": "449755",
                          "type": "tag"
                      },
                      {
                          "id": "450055",
                          "type": "tag"
                      },
                      {
                          "id": "450165",
                          "type": "tag"
                      },
                      {
                          "id": "414",
                          "type": "tag"
                      },
                      {
                          "id": "16503",
                          "type": "tag"
                      },
                      {
                          "id": "451385",
                          "type": "tag"
                      },
                      {
                          "id": "309745",
                          "type": "tag"
                      },
                      {
                          "id": "52051",
                          "type": "tag"
                      },
                      {
                          "id": "451425",
                          "type": "tag"
                      },
                      {
                          "id": "567738",
                          "type": "tag"
                      },
                      {
                          "id": "309755",
                          "type": "tag"
                      },
                      {
                          "id": "309775",
                          "type": "tag"
                      },
                      {
                          "id": "451505",
                          "type": "tag"
                      },
                      {
                          "id": "714",
                          "type": "tag"
                      },
                      {
                          "id": "708",
                          "type": "tag"
                      },
                      {
                          "id": "609994",
                          "type": "tag"
                      },
                      {
                          "id": "425",
                          "type": "tag"
                      },
                      {
                          "id": "451625",
                          "type": "tag"
                      },
                      {
                          "id": "103301",
                          "type": "tag"
                      },
                      {
                          "id": "17410",
                          "type": "tag"
                      },
                      {
                          "id": "6416",
                          "type": "tag"
                      },
                      {
                          "id": "422",
                          "type": "tag"
                      },
                      {
                          "id": "239",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "34794",
                          "type": "tag"
                      },
                      {
                          "id": "17196",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "17189",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577266-vanguard-etfs-recommendations-for-2023"
          }
      },
      {
          "id": "4577265",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T10:14:54-05:00",
              "isLockedPro": false,
              "commentCount": 18,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/490597708/image_490597708.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "quick-picks-lists": {
                      "title": "Quick Picks & Lists",
                      "slug": "quick-picks-lists"
                  }
              },
              "title": "Tesla: Hitting The Brakes",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "105757",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436139",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "16123",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "692",
                          "type": "tag"
                      },
                      {
                          "id": "604655",
                          "type": "tag"
                      },
                      {
                          "id": "605114",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "604283",
                          "type": "tag"
                      },
                      {
                          "id": "17427",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577265-tesla-hitting-the-brakes"
          }
      },
      {
          "id": "4577065",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:30:00-05:00",
              "isLockedPro": false,
              "commentCount": 96,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1327248775/image_1327248775.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "British American Tobacco Vs. Philip Morris: One's Way Better",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "68315",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436910",
                          "type": "sentiment"
                      },
                      {
                          "id": "436911",
                          "type": "sentiment"
                      },
                      {
                          "id": "436912",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "21534",
                          "type": "tag"
                      },
                      {
                          "id": "2536",
                          "type": "tag"
                      },
                      {
                          "id": "11074",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "2568",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "160305",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577065-british-american-tobacco-vs-philip-morris-one-stock-much-better"
          }
      },
      {
          "id": "4577229",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T08:09:22-05:00",
              "isLockedPro": false,
              "commentCount": 22,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1420039843/image_1420039843.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "quick-picks-lists": {
                      "title": "Quick Picks & Lists",
                      "slug": "quick-picks-lists"
                  }
              },
              "title": "Comparing The Cloud Leaders: Amazon Web Services, Microsoft Intelligent Cloud, And Google Cloud",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "106821",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436815",
                          "type": "sentiment"
                      },
                      {
                          "id": "436816",
                          "type": "sentiment"
                      },
                      {
                          "id": "436817",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "562",
                          "type": "tag"
                      },
                      {
                          "id": "148893",
                          "type": "tag"
                      },
                      {
                          "id": "575",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "137271",
                          "type": "tag"
                      },
                      {
                          "id": "602137",
                          "type": "tag"
                      },
                      {
                          "id": "650",
                          "type": "tag"
                      },
                      {
                          "id": "1273",
                          "type": "tag"
                      },
                      {
                          "id": "544",
                          "type": "tag"
                      },
                      {
                          "id": "539",
                          "type": "tag"
                      },
                      {
                          "id": "7050",
                          "type": "tag"
                      },
                      {
                          "id": "663",
                          "type": "tag"
                      },
                      {
                          "id": "16041",
                          "type": "tag"
                      },
                      {
                          "id": "15187",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "658676",
                          "type": "tag"
                      },
                      {
                          "id": "1302",
                          "type": "tag"
                      },
                      {
                          "id": "17427",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577229-comparing-cloud-leaders-amazon-aws-microsoft-cloud-azure-google-cloud"
          }
      },
      {
          "id": "4577222",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:15:25-05:00",
              "isLockedPro": false,
              "commentCount": 36,
              "gettyImageUrl": null,
              "videoPreviewUrl": null,
              "themes": {},
              "title": "Wall Street Breakfast: The Big Game",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "25250",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": []
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "35794",
                          "type": "tag"
                      },
                      {
                          "id": "3340",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577222-wall-street-breakfast-big-game"
          }
      },
      {
          "id": "4577323",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T12:35:17-05:00",
              "isLockedPro": false,
              "commentCount": 10,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1393876536/image_1393876536.jpg",
              "videoPreviewUrl": null,
              "themes": {},
              "title": "Google Stock: 4 Things That Smart Investors Should Know",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "39591",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "435570",
                          "type": "sentiment"
                      },
                      {
                          "id": "435571",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "544",
                          "type": "tag"
                      },
                      {
                          "id": "148893",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "91421",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "607343",
                          "type": "tag"
                      },
                      {
                          "id": "662816",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577323-google-stock-4-things-that-smart-investors-should-know"
          }
      },
      {
          "id": "4577316",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T12:23:25-05:00",
              "isLockedPro": false,
              "commentCount": 12,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1359585982/image_1359585982.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "growth": {
                      "title": "Growth",
                      "slug": "growth"
                  },
                  "secular-growth": {
                      "title": "Secular Growth",
                      "slug": "secular-growth"
                  },
                  "long-ideas": {
                      "title": "Long Ideas",
                      "slug": "long-ideas"
                  }
              },
              "title": "Amazon: What Most Investors Get Wrong About The Company's Long-Term Potential",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "106427",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "437035",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "562",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "547",
                          "type": "tag"
                      },
                      {
                          "id": "544",
                          "type": "tag"
                      },
                      {
                          "id": "148893",
                          "type": "tag"
                      },
                      {
                          "id": "575",
                          "type": "tag"
                      },
                      {
                          "id": "56",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "614223",
                          "type": "tag"
                      },
                      {
                          "id": "115472",
                          "type": "tag"
                      },
                      {
                          "id": "142971",
                          "type": "tag"
                      },
                      {
                          "id": "1936",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "114682",
                          "type": "tag"
                      },
                      {
                          "id": "114692",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577316-amazon-what-most-investors-get-wrong-about-the-companys-long-term-potential"
          }
      },
      {
          "id": "4576939",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 37,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1362515277/image_1362515277.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "reits": {
                      "title": "REITs",
                      "slug": "reits"
                  }
              },
              "title": "Is My 'KISS' On Your List?",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "24223",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": []
              },
              "primaryTickers": {
                  "data": []
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "5946",
                          "type": "tag"
                      },
                      {
                          "id": "4685",
                          "type": "tag"
                      },
                      {
                          "id": "6849",
                          "type": "tag"
                      },
                      {
                          "id": "3624",
                          "type": "tag"
                      },
                      {
                          "id": "9871",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "17135",
                          "type": "tag"
                      },
                      {
                          "id": "393",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "150933",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4576939-is-my-kiss-on-your-list"
          }
      },
      {
          "id": "4577208",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T09:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 24,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1297117890/image_1297117890.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "growth": {
                      "title": "Growth",
                      "slug": "growth"
                  },
                  "industry-leader": {
                      "title": "Industry Leader",
                      "slug": "industry-leader"
                  },
                  "international-expansion": {
                      "title": "International Expansion",
                      "slug": "international-expansion"
                  },
                  "secular-growth": {
                      "title": "Secular Growth",
                      "slug": "secular-growth"
                  }
              },
              "title": "Enphase: The Pivotal Buying Moment Is Finally Here",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "106173",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "437003",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "34878",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "609990",
                          "type": "tag"
                      },
                      {
                          "id": "115472",
                          "type": "tag"
                      },
                      {
                          "id": "548926",
                          "type": "tag"
                      },
                      {
                          "id": "142831",
                          "type": "tag"
                      },
                      {
                          "id": "142971",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "10",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "114682",
                          "type": "tag"
                      },
                      {
                          "id": "114692",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577208-enphase-q4-earnings-pivotal-buying-moment-finally-here"
          }
      },
      {
          "id": "4577211",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T08:00:20-05:00",
              "isLockedPro": false,
              "commentCount": 26,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1421030803/image_1421030803.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "growth": {
                      "title": "Growth",
                      "slug": "growth"
                  },
                  "industry-leader": {
                      "title": "Industry Leader",
                      "slug": "industry-leader"
                  },
                  "long-ideas": {
                      "title": "Long Ideas",
                      "slug": "long-ideas"
                  }
              },
              "title": "Has Microsoft Jumped Ahead Of Google In AI Powered Search?",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "48431",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436971",
                          "type": "sentiment"
                      },
                      {
                          "id": "436972",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "544",
                          "type": "tag"
                      },
                      {
                          "id": "575",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "102231",
                          "type": "tag"
                      },
                      {
                          "id": "115472",
                          "type": "tag"
                      },
                      {
                          "id": "548926",
                          "type": "tag"
                      },
                      {
                          "id": "1936",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "615773",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "114682",
                          "type": "tag"
                      },
                      {
                          "id": "114692",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577211-microsoft-ahead-google-ai-powered-search"
          }
      },
      {
          "id": "4577093",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-09T21:31:33-05:00",
              "isLockedPro": false,
              "commentCount": 39,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1257429121/image_1257429121.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "quick-picks-lists": {
                      "title": "Quick Picks & Lists",
                      "slug": "quick-picks-lists"
                  }
              },
              "title": "Transocean Increases Backlog By 16.5% Sequentially - Buy",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "93566",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436987",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "1447",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "538386",
                          "type": "tag"
                      },
                      {
                          "id": "17427",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "18100",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577093-transocean-stock-increases-backlog-16-percent-sequentially-buy"
          }
      },
      {
          "id": "4577044",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T02:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 27,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1345632344/image_1345632344.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "Better Buy After Q4 Earnings: Enterprise Products Or Plains?",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "105975",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436968",
                          "type": "sentiment"
                      },
                      {
                          "id": "436969",
                          "type": "sentiment"
                      },
                      {
                          "id": "436970",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "3360",
                          "type": "tag"
                      },
                      {
                          "id": "6586",
                          "type": "tag"
                      },
                      {
                          "id": "108872",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "607195",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "150933",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577044-better-buy-after-q4-earnings-enterprise-products-or-plains"
          }
      },
      {
          "id": "4577030",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T07:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 50,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1212245453/image_1212245453.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "growth": {
                      "title": "Growth",
                      "slug": "growth"
                  },
                  "expanding-production": {
                      "title": "Expanding Production",
                      "slug": "expanding-production"
                  },
                  "long-ideas": {
                      "title": "Long Ideas",
                      "slug": "long-ideas"
                  }
              },
              "title": "AT&T: Remember The Growth",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "90425",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436933",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "685",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "601292",
                          "type": "tag"
                      },
                      {
                          "id": "601293",
                          "type": "tag"
                      },
                      {
                          "id": "585104",
                          "type": "tag"
                      },
                      {
                          "id": "584543",
                          "type": "tag"
                      },
                      {
                          "id": "5332",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "521645",
                          "type": "tag"
                      },
                      {
                          "id": "115472",
                          "type": "tag"
                      },
                      {
                          "id": "142801",
                          "type": "tag"
                      },
                      {
                          "id": "1936",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "10727",
                          "type": "tag"
                      },
                      {
                          "id": "114682",
                          "type": "tag"
                      },
                      {
                          "id": "114692",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577030-at-and-t-remember-the-growth"
          }
      },
      {
          "id": "4577177",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T03:00:00-05:00",
              "isLockedPro": false,
              "commentCount": 16,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1392175988/image_1392175988.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "Why Barrick Gold Stock Is One Of The Strongest Buys",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "102896",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436926",
                          "type": "sentiment"
                      },
                      {
                          "id": "436927",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "616586",
                          "type": "tag"
                      },
                      {
                          "id": "1006",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": [
                      {
                          "id": "3196",
                          "type": "tag"
                      },
                      {
                          "id": "80",
                          "type": "tag"
                      }
                  ]
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "573365",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "606619",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "603709",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "34503",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4577177-barrick-gold-stock-one-of-strongest-buys"
          }
      },
      {
          "id": "4576946",
          "type": "article",
          "attributes": {
              "publishOn": "2023-02-10T09:15:00-05:00",
              "isLockedPro": false,
              "commentCount": 17,
              "gettyImageUrl": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1434437160/image_1434437160.jpg",
              "videoPreviewUrl": null,
              "themes": {
                  "dividend-ideas": {
                      "title": "Dividend Ideas",
                      "slug": "dividend-ideas"
                  }
              },
              "title": "XYLD: 13% Yield, Monthly Payer Vs. S&P Alternatives",
              "isPaywalled": false
          },
          "relationships": {
              "author": {
                  "data": {
                      "id": "23275",
                      "type": "author"
                  }
              },
              "sentiments": {
                  "data": [
                      {
                          "id": "436906",
                          "type": "sentiment"
                      }
                  ]
              },
              "primaryTickers": {
                  "data": [
                      {
                          "id": "105362",
                          "type": "tag"
                      }
                  ]
              },
              "secondaryTickers": {
                  "data": []
              },
              "otherTags": {
                  "data": [
                      {
                          "id": "14440",
                          "type": "tag"
                      },
                      {
                          "id": "156",
                          "type": "tag"
                      },
                      {
                          "id": "17335",
                          "type": "tag"
                      },
                      {
                          "id": "608068",
                          "type": "tag"
                      },
                      {
                          "id": "16549",
                          "type": "tag"
                      },
                      {
                          "id": "326",
                          "type": "tag"
                      }
                  ]
              }
          },
          "links": {
              "self": "/article/4576946-xyld-monthly-payer-vs-sp-alternatives"
          }
      }
  ],
  "included": [
      {
          "id": "106400",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "on-the-pulse",
              "userId": 54097509,
              "tagId": 613735,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/054/097/509/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/054/097/509/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/054/097/509/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/054/097/509/extra_large_pic.png"
              },
              "nick": "On the Pulse",
              "bio": "A financial researcher and avid investor with a keen eye for innovation and disruption, as well as growth buy-outs and value stocks. <br><p></p>Keeping an eye on the pace of high tech and early growth companies, I write about current events and the biggest news surrounding the industry, and strive to provide readers with ample research and investment opportunities.<br>",
              "deactivated": null,
              "memberSince": 2021,
              "contributorSince": 2021,
              "followersCount": 7149
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "54097509",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/on-the-pulse",
              "profileUrl": "/author/on-the-pulse",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "544",
          "type": "tag",
          "attributes": {
              "slug": "goog",
              "name": "GOOG"
          },
          "links": {
              "self": "/symbol/GOOG"
          }
      },
      {
          "id": "148893",
          "type": "tag",
          "attributes": {
              "slug": "googl",
              "name": "GOOGL"
          },
          "links": {
              "self": "/symbol/GOOGL"
          }
      },
      {
          "id": "102870",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "victor-dergunov",
              "userId": 48200183,
              "tagId": 572864,
              "image": {
                  "small": "https://static3.seekingalpha.com/images/users_profile/048/200/183/small_pic.png",
                  "medium": "https://static3.seekingalpha.com/images/users_profile/048/200/183/medium_pic.png",
                  "big": "https://static3.seekingalpha.com/images/users_profile/048/200/183/big_pic.png",
                  "extra_large": "https://static3.seekingalpha.com/images/users_profile/048/200/183/extra_large_pic.png"
              },
              "nick": "Victor Dergunov",
              "bio": "<p>Hi, I'm Victor! It all goes back to looking at stock quotes in the old Wall St. Journal when I was a kid. What do these numbers mean, I thought? Fortunately, my uncle was a successful commodities trader on the NYMEX, and I got him to teach me how to invest. I bought my first actual stock in a company when I was 20, and the rest, as they say, is history. Over the years, some of my top investments include Apple, Tesla, Amazon, Netflix, Facebook, Google, Microsoft, Nike, JPMorgan, Bitcoin, and others.</p>",
              "deactivated": null,
              "memberSince": 2017,
              "contributorSince": 2017,
              "followersCount": 39960
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "48200183",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/victor-dergunov",
              "profileUrl": "/author/victor-dergunov",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "16123",
          "type": "tag",
          "attributes": {
              "slug": "tsla",
              "name": "TSLA"
          },
          "links": {
              "self": "/symbol/TSLA"
          }
      },
      {
          "id": "96726",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "rida-morwa",
              "userId": 16392,
              "tagId": 548716,
              "image": {
                  "small": "https://static.seekingalpha.com/images/users_profile/000/016/392/small_pic.png",
                  "medium": "https://static.seekingalpha.com/images/users_profile/000/016/392/medium_pic.png",
                  "big": "https://static.seekingalpha.com/images/users_profile/000/016/392/big_pic.png",
                  "extra_large": "https://static.seekingalpha.com/images/users_profile/000/016/392/extra_large_pic.png"
              },
              "nick": "Rida Morwa",
              "bio": "<p>I am a former Investment and Commercial Banker with over 35 years experience in the field. I have been advising both individuals and institutional clients on high-yield investment strategies since 1991. As author of <b><a href=\"https://seekingalpha.com/author/rida-morwa/research\">High Dividend Opportunities</a></b>, <b>the #1 service on Seeking Alpha for the 6th year in a row.</b></p> <p>Our unique <b>Income Method</b> fuels our portfolio and generates <b>yields of +9%</b> along side steady capital gains. We have generated 16% average annual returns for our members, so they see their portfolio's grow even while living off of their income! <b>7500+ members have joined us already, come and give our service a try!</b> Join us for a <a href=\"https://seekingalpha.com/author/rida-morwa/research\"><b>2-week free trial</b></a> and get access to our <b>model portfolio</b> targeting 9-10% overall yield. No one needs to invest alone.</p><p><b><a href=\"https://seekingalpha.com/author/rida-morwa/research\">Click here to find out more!</a></b></p><p>In addition to being a former Certified Public Accountant (\"CPA\") from the State of Arizona (License # 8693-E), I hold a BS Degree from Indiana University, Bloomington, and a Masters degree from Thunderbird School of Global Management (Arizona). I currently serve as a CEO of <b>Aiko Capital Ltd</b>, an investment research company incorporated in the UK. My Research and Articles have been featured on Forbes, Yahoo Finance, TheStreet, Seeking Alpha, Investing.com, ETFdailynews, NASDAQ.Com, FXEmpire, and others.</p><p></p><p>The service is supported by a large team of seasoned income authors who specialize in all sub-sectors of the high-yield space to bring you the best available opportunities. By having 6 experts on your side who invest in our own recommendations, you can count on the best advice! </p><p>In addition to myself, our experts include:</p><p><b>1) <a href=\"https://seekingalpha.com/author/treading-softly#regular_articles\">Treading Softly</a></b></p><p><b>2) <a href=\"https://seekingalpha.com/author/beyond-saving#regular_articles\">Beyond Saving</a><br></b></p><p><b>3) <a href=\"https://seekingalpha.com/author/philip-mause#regular_articles\">Philip Mause</a></b><br></p><p><b>4) <a href=\"https://seekingalpha.com/author/pendragony#regular_articles\">PendragonY</a><br></b></p><p><b>5) Hidden Opportunities</b></p><p>We cover all aspects and sectors in the high yield space! For more information on “High Dividend Opportunities” please check out our landing page:</p><p><b><a href=\"https://seekingalpha.com/checkout?service_id=mp_1006\">High Dividend Opportunities</a></b></p><p><i>High Dividend Opportunities ('HDO') is a service by Aiko Capital Ltd, a limited company - All rights are reserved.</i></p>",
              "deactivated": null,
              "memberSince": 2006,
              "contributorSince": 2015,
              "followersCount": 99601
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "16392",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/rida-morwa",
              "profileUrl": "/author/rida-morwa",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "10023",
          "type": "tag",
          "attributes": {
              "slug": "ht",
              "name": "HT"
          },
          "links": {
              "self": "/symbol/HT"
          }
      },
      {
          "id": "582314",
          "type": "tag",
          "attributes": {
              "slug": "ht.pc",
              "name": "HT.PC"
          },
          "links": {
              "self": "/symbol/HT.PC"
          }
      },
      {
          "id": "582315",
          "type": "tag",
          "attributes": {
              "slug": "ht.pd",
              "name": "HT.PD"
          },
          "links": {
              "self": "/symbol/HT.PD"
          }
      },
      {
          "id": "582316",
          "type": "tag",
          "attributes": {
              "slug": "ht.pe",
              "name": "HT.PE"
          },
          "links": {
              "self": "/symbol/HT.PE"
          }
      },
      {
          "id": "504376",
          "type": "tag",
          "attributes": {
              "slug": "rtl",
              "name": "RTL"
          },
          "links": {
              "self": "/symbol/RTL"
          }
      },
      {
          "id": "607330",
          "type": "tag",
          "attributes": {
              "slug": "rtlpo",
              "name": "RTLPO"
          },
          "links": {
              "self": "/symbol/RTLPO"
          }
      },
      {
          "id": "598631",
          "type": "tag",
          "attributes": {
              "slug": "rtlpp",
              "name": "RTLPP"
          },
          "links": {
              "self": "/symbol/RTLPP"
          }
      },
      {
          "id": "101900",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "dividend-sensei",
              "userId": 47572571,
              "tagId": 568750,
              "image": {
                  "small": "https://static3.seekingalpha.com/images/users_profile/047/572/571/small_pic.png",
                  "medium": "https://static3.seekingalpha.com/images/users_profile/047/572/571/medium_pic.png",
                  "big": "https://static3.seekingalpha.com/images/users_profile/047/572/571/big_pic.png",
                  "extra_large": "https://static3.seekingalpha.com/images/users_profile/047/572/571/extra_large_pic.png"
              },
              "nick": "Dividend Sensei",
              "bio": "<p>Adam Galas is a co-founder of Wide Moat Research (\"WMR\"), a subscription-based publisher of financial information, serving over 5,000 investors around the world. WMR has a team of experienced multi-disciplined analysts covering all dividend categories, including REITs, MLPs, BDCs, and traditional C-Corps. </p><p><br></p><p>The WMR brands include: (1) The Intelligent REIT Investor (newsletter), (2) The <a href=\"https://www.divkings.com/\">Intelligent Dividend Investor</a> (newsletter), (3) <a href=\"https://seekingalpha.com/checkout?service_id=mp_1026\">iREIT on Alpha</a> (Seeking Alpha), and (4) <a href=\"https://seekingalpha.com/checkout?service_id=mp_1319\">The Dividend Kings</a> (Seeking Alpha). </p><p><br></p><p>I'm a proud Army veteran and have seven years of experience as an analyst/investment writer for Dividend Kings, iREIT, The Intelligent Dividend Investor, The Motley Fool, Simply Safe Dividends, Seeking Alpha, and the Adam Mesh Trading Group. I'm proud to be one of the founders of <b></b><a href=\"https://seekingalpha.com/checkout?service_id=mp_1319&sasource=new_auth_profile_header_ad\"><b>The Dividend Kings</b></a>, joining forces with Brad Thomas, Chuck Carnevale, and other leading income writers to offer the best premium service on Seeking Alpha's Market Place.</p><p> <br></p><p>My goal is to help all people learn how to harness the awesome power of dividend growth investing to achieve their financial dreams and enrich their lives. <br></p><p><br></p><p>With 24 years of investing experience, I've learned what works and more importantly, what doesn't, when it comes to building long-term wealth and safe and dependable income streams in all economic and market conditions. </p><p><br></p>",
              "deactivated": null,
              "memberSince": 2016,
              "contributorSince": 2016,
              "followersCount": 100964
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "47572571",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/dividend-sensei",
              "profileUrl": "/author/dividend-sensei",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "578471",
          "type": "tag",
          "attributes": {
              "slug": "omfl",
              "name": "OMFL"
          },
          "links": {
              "self": "/symbol/OMFL"
          }
      },
      {
          "id": "34983",
          "type": "tag",
          "attributes": {
              "slug": "schd",
              "name": "SCHD"
          },
          "links": {
              "self": "/symbol/SCHD"
          }
      },
      {
          "id": "14973",
          "type": "tag",
          "attributes": {
              "slug": "schg",
              "name": "SCHG"
          },
          "links": {
              "self": "/symbol/SCHG"
          }
      },
      {
          "id": "34688",
          "type": "tag",
          "attributes": {
              "slug": "spgp",
              "name": "SPGP"
          },
          "links": {
              "self": "/symbol/SPGP"
          }
      },
      {
          "id": "2848",
          "type": "tag",
          "attributes": {
              "slug": "vig",
              "name": "VIG"
          },
          "links": {
              "self": "/symbol/VIG"
          }
      },
      {
          "id": "24665",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "avi-gilburt",
              "userId": 876837,
              "tagId": 34949,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/000/876/837/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/000/876/837/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/000/876/837/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/000/876/837/extra_large_pic.png"
              },
              "nick": "Avi Gilburt",
              "bio": "Avi Gilburt is founder of <a href=\"https://www.elliottwavetrader.net/?utm_source=seekingalpha&utm_medium=web&utm_campaign=Avi\">ElliottWaveTrader.net</a>, a live trading room and member forum focusing on Elliott Wave market analysis with over 6000 members and almost 1000 money manager clients. Avi emphasizes a comprehensive reading of charts and wave counts that is free of personal bias or predisposition. <br><br><p>Avi is an accountant and a lawyer by training. His education background includes his graduating college with dual accounting and economics majors, and he then passed all four parts of the CPA exam at once right after he graduated college. He then earned his Juris Doctorate in an advanced two and a half year program at the St. John’s School of Law in New York, where he graduated cumlaude, and in the top 5% of his class. He then went onto the NYU School of Law for his masters of law in taxation (LL.M.). </p>Before retiring from his legal career, Avi was a partner and National Director at a major national firm. During his legal career, he spearheaded a number of acquisition transactions worth hundreds of millions to billions of dollars in value. So, clearly, Mr. Gilburt has a detailed understanding how businesses work and are valued. <br><br><p>Yet, when it came to learning how to accurately analyze the financial markets, Avi had to unlearn everything he learned in economics in order to maintain on the correct side of the market the great majority of the time. In fact, once he came to the realization that economics and geopolitics fail to assist in understanding how the market works, it allowed him to view financial markets from a more accurate perspective. </p>For those interested in how Avi went from a successful lawyer and accountant to become the founder of Elliottwavetrader.net, his detailed story is linked here. <br>Since Avi began providing his analysis to the public, he has made some spectacular market calls which has earned him the reputation of being one of the best technical analysts in the world. <br><br><p>As an example of some of his most notable astounding market calls, in July of 2011, he called for the USD to begin a multi-year rally from the 74 region to an ideal target of 103.53. In January of 2017, the DXY struck 103.82 and began a pullback expected by Avi. </p>As another example of one of his astounding calls, Avi called the top in the gold market during its parabolic phase in 2011, with an ideal target of $1,915. As we all know, gold hit a high of $1,921, and pulled back for over 4 years since that time. The night that gold hit its lows in December of 2015, Avi was telling his subscribers that he was on the phone with his broker buying a large order of physical gold, while he had been accumulating individual miner stocks that month, and had just opened the EWT Miners Portfolio to begin buying individual miners stocks due to his expectation of an impending low in the complex. <br><br><p>One of his most shocking calls in the stock market was his call in 2015 for the S&P500 to rally from the 1800SPX region to the 2600SPX region, whereas it would coincide with a “global melt-up” in many other assets. Moreover, he was banging on the table in November of 2016 that we were about to enter the most powerful phase of the rally to 2600SPX, and he strongly noted that it did not matter who won the 2016 election in the US, despite many believing that the market would “crash” if Trump would win the election. This was indeed a testament to the accuracy of the Fibonacci Pinball method that Avi developed. </p><br>",
              "deactivated": null,
              "memberSince": 2011,
              "contributorSince": 2011,
              "followersCount": 71073
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "876837",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/avi-gilburt",
              "profileUrl": "/author/avi-gilburt",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "332",
          "type": "tag",
          "attributes": {
              "slug": "tlt",
              "name": "TLT"
          },
          "links": {
              "self": "/symbol/TLT"
          }
      },
      {
          "id": "24573",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "tom-madell",
              "userId": 868529,
              "tagId": 34794,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/000/868/529/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/000/868/529/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/000/868/529/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/000/868/529/extra_large_pic.png"
              },
              "nick": "Tom Madell",
              "bio": "Tom Madell, Ph.D., is the publisher of Mutual Fund/ETF Research Newsletter, a free newsletter which began publication in 1999 with thousands of readers. It has become one of the most popular mutual fund/ETF newsletters on the internet, as shown <a href=\"http://dmoztools.net/Business/Investing/Funds/Mutual_Funds/News_and_Media/Newsletters/\">here</a>. <br>His site has been named as one of the \"Top 12 Investment Newsletters Focusing on Mutual Funds\" at <a href=\"http://web.archive.org/web/20150313142112/http://mutualfunds.com/resources/top-12-newsletters-focusing-on-mutual-funds\">mutualfunds.com</a> , an important fund information provider, under \"Fund Newsletter\". Also, recently his Newsletter was recognized as one of 5 expert mutual fund resources worth following offering free, and, in its case, particularly \"unbiased, useful, and original advice\" at <a href=\"http://funds-newsletter.com/fundreference-art.htm\">http://funds-newsletter.com/fundreference-art.htm</a> .He is also a researcher/writer/investor whose articles have appeared on hundreds of websites, including the Wall Street Journal, USA Today, Morningstar and in the international media.<br><br>His articles have been among the most popular among those posted on the Morningstar.com website by non-Morningstar employed contributors.<br><br>His recommendations have an outstanding, long-standing record of success . His complete list of former articles can be accessed at <a href=\"http://funds-newsletter.com\" target=\"_blank\">http://funds-newsletter.com</a><br>",
              "deactivated": null,
              "memberSince": 2011,
              "contributorSince": 2011,
              "followersCount": 1648
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "868529",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/tom-madell",
              "profileUrl": "/author/tom-madell",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "7303",
          "type": "tag",
          "attributes": {
              "slug": "bsv",
              "name": "BSV"
          },
          "links": {
              "self": "/symbol/BSV"
          }
      },
      {
          "id": "1430",
          "type": "tag",
          "attributes": {
              "slug": "dbc",
              "name": "DBC"
          },
          "links": {
              "self": "/symbol/DBC"
          }
      },
      {
          "id": "3196",
          "type": "tag",
          "attributes": {
              "slug": "gdx",
              "name": "GDX"
          },
          "links": {
              "self": "/symbol/GDX"
          }
      },
      {
          "id": "558876",
          "type": "tag",
          "attributes": {
              "slug": "lvhd",
              "name": "LVHD"
          },
          "links": {
              "self": "/symbol/LVHD"
          }
      },
      {
          "id": "3552",
          "type": "tag",
          "attributes": {
              "slug": "sh",
              "name": "SH"
          },
          "links": {
              "self": "/symbol/SH"
          }
      },
      {
          "id": "531846",
          "type": "tag",
          "attributes": {
              "slug": "vasfx",
              "name": "VASFX"
          },
          "links": {
              "self": "/symbol/VASFX"
          }
      },
      {
          "id": "235245",
          "type": "tag",
          "attributes": {
              "slug": "vbipx",
              "name": "VBIPX"
          },
          "links": {
              "self": "/symbol/VBIPX"
          }
      },
      {
          "id": "235255",
          "type": "tag",
          "attributes": {
              "slug": "vbirx",
              "name": "VBIRX"
          },
          "links": {
              "self": "/symbol/VBIRX"
          }
      },
      {
          "id": "235265",
          "type": "tag",
          "attributes": {
              "slug": "vbisx",
              "name": "VBISX"
          },
          "links": {
              "self": "/symbol/VBISX"
          }
      },
      {
          "id": "235275",
          "type": "tag",
          "attributes": {
              "slug": "vbitx",
              "name": "VBITX"
          },
          "links": {
              "self": "/symbol/VBITX"
          }
      },
      {
          "id": "15082",
          "type": "tag",
          "attributes": {
              "slug": "vcit",
              "name": "VCIT"
          },
          "links": {
              "self": "/symbol/VCIT"
          }
      },
      {
          "id": "448165",
          "type": "tag",
          "attributes": {
              "slug": "vcsax",
              "name": "VCSAX"
          },
          "links": {
              "self": "/symbol/VCSAX"
          }
      },
      {
          "id": "704",
          "type": "tag",
          "attributes": {
              "slug": "vdc",
              "name": "VDC"
          },
          "links": {
              "self": "/symbol/VDC"
          }
      },
      {
          "id": "448345",
          "type": "tag",
          "attributes": {
              "slug": "vdigx",
              "name": "VDIGX"
          },
          "links": {
              "self": "/symbol/VDIGX"
          }
      },
      {
          "id": "567732",
          "type": "tag",
          "attributes": {
              "slug": "vffsx",
              "name": "VFFSX"
          },
          "links": {
              "self": "/symbol/VFFSX"
          }
      },
      {
          "id": "448695",
          "type": "tag",
          "attributes": {
              "slug": "vfiax",
              "name": "VFIAX"
          },
          "links": {
              "self": "/symbol/VFIAX"
          }
      },
      {
          "id": "448725",
          "type": "tag",
          "attributes": {
              "slug": "vfinx",
              "name": "VFINX"
          },
          "links": {
              "self": "/symbol/VFINX"
          }
      },
      {
          "id": "582713",
          "type": "tag",
          "attributes": {
              "slug": "vfmv",
              "name": "VFMV"
          },
          "links": {
              "self": "/symbol/VFMV"
          }
      },
      {
          "id": "222405",
          "type": "tag",
          "attributes": {
              "slug": "vgavx",
              "name": "VGAVX"
          },
          "links": {
              "self": "/symbol/VGAVX"
          }
      },
      {
          "id": "224555",
          "type": "tag",
          "attributes": {
              "slug": "vgivx",
              "name": "VGIVX"
          },
          "links": {
              "self": "/symbol/VGIVX"
          }
      },
      {
          "id": "449115",
          "type": "tag",
          "attributes": {
              "slug": "vgsix",
              "name": "VGSIX"
          },
          "links": {
              "self": "/symbol/VGSIX"
          }
      },
      {
          "id": "449125",
          "type": "tag",
          "attributes": {
              "slug": "vgslx",
              "name": "VGSLX"
          },
          "links": {
              "self": "/symbol/VGSLX"
          }
      },
      {
          "id": "449135",
          "type": "tag",
          "attributes": {
              "slug": "vgsnx",
              "name": "VGSNX"
          },
          "links": {
              "self": "/symbol/VGSNX"
          }
      },
      {
          "id": "309735",
          "type": "tag",
          "attributes": {
              "slug": "vgtsx",
              "name": "VGTSX"
          },
          "links": {
              "self": "/symbol/VGTSX"
          }
      },
      {
          "id": "449165",
          "type": "tag",
          "attributes": {
              "slug": "vhcix",
              "name": "VHCIX"
          },
          "links": {
              "self": "/symbol/VHCIX"
          }
      },
      {
          "id": "709",
          "type": "tag",
          "attributes": {
              "slug": "vht",
              "name": "VHT"
          },
          "links": {
              "self": "/symbol/VHT"
          }
      },
      {
          "id": "598627",
          "type": "tag",
          "attributes": {
              "slug": "vhyax",
              "name": "VHYAX"
          },
          "links": {
              "self": "/symbol/VHYAX"
          }
      },
      {
          "id": "199065",
          "type": "tag",
          "attributes": {
              "slug": "vicbx",
              "name": "VICBX"
          },
          "links": {
              "self": "/symbol/VICBX"
          }
      },
      {
          "id": "199075",
          "type": "tag",
          "attributes": {
              "slug": "vicsx",
              "name": "VICSX"
          },
          "links": {
              "self": "/symbol/VICSX"
          }
      },
      {
          "id": "449275",
          "type": "tag",
          "attributes": {
              "slug": "vigax",
              "name": "VIGAX"
          },
          "links": {
              "self": "/symbol/VIGAX"
          }
      },
      {
          "id": "449285",
          "type": "tag",
          "attributes": {
              "slug": "vigix",
              "name": "VIGIX"
          },
          "links": {
              "self": "/symbol/VIGIX"
          }
      },
      {
          "id": "449295",
          "type": "tag",
          "attributes": {
              "slug": "vigrx",
              "name": "VIGRX"
          },
          "links": {
              "self": "/symbol/VIGRX"
          }
      },
      {
          "id": "567306",
          "type": "tag",
          "attributes": {
              "slug": "vihax",
              "name": "VIHAX"
          },
          "links": {
              "self": "/symbol/VIHAX"
          }
      },
      {
          "id": "449565",
          "type": "tag",
          "attributes": {
              "slug": "vivax",
              "name": "VIVAX"
          },
          "links": {
              "self": "/symbol/VIVAX"
          }
      },
      {
          "id": "449575",
          "type": "tag",
          "attributes": {
              "slug": "vivix",
              "name": "VIVIX"
          },
          "links": {
              "self": "/symbol/VIVIX"
          }
      },
      {
          "id": "449645",
          "type": "tag",
          "attributes": {
              "slug": "vlacx",
              "name": "VLACX"
          },
          "links": {
              "self": "/symbol/VLACX"
          }
      },
      {
          "id": "449655",
          "type": "tag",
          "attributes": {
              "slug": "vlcax",
              "name": "VLCAX"
          },
          "links": {
              "self": "/symbol/VLCAX"
          }
      },
      {
          "id": "449755",
          "type": "tag",
          "attributes": {
              "slug": "vlisx",
              "name": "VLISX"
          },
          "links": {
              "self": "/symbol/VLISX"
          }
      },
      {
          "id": "450055",
          "type": "tag",
          "attributes": {
              "slug": "vmnvx",
              "name": "VMNVX"
          },
          "links": {
              "self": "/symbol/VMNVX"
          }
      },
      {
          "id": "450165",
          "type": "tag",
          "attributes": {
              "slug": "vmvfx",
              "name": "VMVFX"
          },
          "links": {
              "self": "/symbol/VMVFX"
          }
      },
      {
          "id": "414",
          "type": "tag",
          "attributes": {
              "slug": "vnq",
              "name": "VNQ"
          },
          "links": {
              "self": "/symbol/VNQ"
          }
      },
      {
          "id": "16503",
          "type": "tag",
          "attributes": {
              "slug": "voo",
              "name": "VOO"
          },
          "links": {
              "self": "/symbol/VOO"
          }
      },
      {
          "id": "451385",
          "type": "tag",
          "attributes": {
              "slug": "vtapx",
              "name": "VTAPX"
          },
          "links": {
              "self": "/symbol/VTAPX"
          }
      },
      {
          "id": "309745",
          "type": "tag",
          "attributes": {
              "slug": "vtiax",
              "name": "VTIAX"
          },
          "links": {
              "self": "/symbol/VTIAX"
          }
      },
      {
          "id": "52051",
          "type": "tag",
          "attributes": {
              "slug": "vtip",
              "name": "VTIP"
          },
          "links": {
              "self": "/symbol/VTIP"
          }
      },
      {
          "id": "451425",
          "type": "tag",
          "attributes": {
              "slug": "vtipx",
              "name": "VTIPX"
          },
          "links": {
              "self": "/symbol/VTIPX"
          }
      },
      {
          "id": "567738",
          "type": "tag",
          "attributes": {
              "slug": "vtisx",
              "name": "VTISX"
          },
          "links": {
              "self": "/symbol/VTISX"
          }
      },
      {
          "id": "309755",
          "type": "tag",
          "attributes": {
              "slug": "vtpsx",
              "name": "VTPSX"
          },
          "links": {
              "self": "/symbol/VTPSX"
          }
      },
      {
          "id": "309775",
          "type": "tag",
          "attributes": {
              "slug": "vtsnx",
              "name": "VTSNX"
          },
          "links": {
              "self": "/symbol/VTSNX"
          }
      },
      {
          "id": "451505",
          "type": "tag",
          "attributes": {
              "slug": "vtspx",
              "name": "VTSPX"
          },
          "links": {
              "self": "/symbol/VTSPX"
          }
      },
      {
          "id": "714",
          "type": "tag",
          "attributes": {
              "slug": "vtv",
              "name": "VTV"
          },
          "links": {
              "self": "/symbol/VTV"
          }
      },
      {
          "id": "708",
          "type": "tag",
          "attributes": {
              "slug": "vug",
              "name": "VUG"
          },
          "links": {
              "self": "/symbol/VUG"
          }
      },
      {
          "id": "609994",
          "type": "tag",
          "attributes": {
              "slug": "vusb",
              "name": "VUSB"
          },
          "links": {
              "self": "/symbol/VUSB"
          }
      },
      {
          "id": "425",
          "type": "tag",
          "attributes": {
              "slug": "vv",
              "name": "VV"
          },
          "links": {
              "self": "/symbol/VV"
          }
      },
      {
          "id": "451625",
          "type": "tag",
          "attributes": {
              "slug": "vviax",
              "name": "VVIAX"
          },
          "links": {
              "self": "/symbol/VVIAX"
          }
      },
      {
          "id": "103301",
          "type": "tag",
          "attributes": {
              "slug": "vwob",
              "name": "VWOB"
          },
          "links": {
              "self": "/symbol/VWOB"
          }
      },
      {
          "id": "17410",
          "type": "tag",
          "attributes": {
              "slug": "vxus",
              "name": "VXUS"
          },
          "links": {
              "self": "/symbol/VXUS"
          }
      },
      {
          "id": "6416",
          "type": "tag",
          "attributes": {
              "slug": "vym",
              "name": "VYM"
          },
          "links": {
              "self": "/symbol/VYM"
          }
      },
      {
          "id": "422",
          "type": "tag",
          "attributes": {
              "slug": "xlp",
              "name": "XLP"
          },
          "links": {
              "self": "/symbol/XLP"
          }
      },
      {
          "id": "239",
          "type": "tag",
          "attributes": {
              "slug": "xlu",
              "name": "XLU"
          },
          "links": {
              "self": "/symbol/XLU"
          }
      },
      {
          "id": "105757",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "tech-stock-pros",
              "userId": 51760760,
              "tagId": 604283,
              "image": {
                  "small": "https://static.seekingalpha.com/images/users_profile/051/760/760/small_pic.png",
                  "medium": "https://static.seekingalpha.com/images/users_profile/051/760/760/medium_pic.png",
                  "big": "https://static.seekingalpha.com/images/users_profile/051/760/760/big_pic.png",
                  "extra_large": "https://static.seekingalpha.com/images/users_profile/051/760/760/extra_large_pic.png"
              },
              "nick": "Tech Stock Pros",
              "bio": "<p> We are professional stock pickers with a proven track record, in investments, industry expertise, and technology edge. We have been top-ranked (Starmine Thomson Reuters, Factset, Institutional Investor) tech equity analysts at Wall Street bulges. Before our Wall Street careers, each of us worked in the tech industry starting as an engineer at various high-tech companies before eventually earning an MBA. We strive to provide clear, applicable, and insightful Wall Street grade fundamental research with an investing edge on tech stocks. We are objective in our assessment of the technologies involved and frequently take contrarian positions after through investigation into hype and conventional wisdom. We aspire to provide best in class investment research to retail investors. We want to level the playing field for retail investors, by providing the best-in-class research that is only accessible to institutional investors. </p>",
              "deactivated": null,
              "memberSince": 2020,
              "contributorSince": 2020,
              "followersCount": 5996
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "51760760",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/tech-stock-pros",
              "profileUrl": "/author/tech-stock-pros",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "692",
          "type": "tag",
          "attributes": {
              "slug": "gm",
              "name": "GM"
          },
          "links": {
              "self": "/symbol/GM"
          }
      },
      {
          "id": "604655",
          "type": "tag",
          "attributes": {
              "slug": "rivn",
              "name": "RIVN"
          },
          "links": {
              "self": "/symbol/RIVN"
          }
      },
      {
          "id": "605114",
          "type": "tag",
          "attributes": {
              "slug": "xpev",
              "name": "XPEV"
          },
          "links": {
              "self": "/symbol/XPEV"
          }
      },
      {
          "id": "68315",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "jonathan-weber",
              "userId": 28873105,
              "tagId": 160305,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/028/873/105/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/028/873/105/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/028/873/105/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/028/873/105/extra_large_pic.png"
              },
              "nick": "Jonathan Weber",
              "bio": "According to Tipranks, Jonathan is among the top 0.5% of bloggers (as of January 10, 2022: https://www.tipranks.com/bloggers/jonathan-weber).<p> <br></p><p>If you want to reach out, you can send a direct message here on Seeking Alpha, or an email to jonathandavidweber@gmail.com. <br></p><p> <br></p><p>Disclosure:</p><p>I work together with Darren McCammon on his Marketplace Service Cash Flow Club. <br></p>",
              "deactivated": null,
              "memberSince": 2014,
              "contributorSince": 2014,
              "followersCount": 47370
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "28873105",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/jonathan-weber",
              "profileUrl": "/author/jonathan-weber",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "21534",
          "type": "tag",
          "attributes": {
              "slug": "btaff",
              "name": "BTAFF"
          },
          "links": {
              "self": "/symbol/BTAFF"
          }
      },
      {
          "id": "2536",
          "type": "tag",
          "attributes": {
              "slug": "bti",
              "name": "BTI"
          },
          "links": {
              "self": "/symbol/BTI"
          }
      },
      {
          "id": "11074",
          "type": "tag",
          "attributes": {
              "slug": "pm",
              "name": "PM"
          },
          "links": {
              "self": "/symbol/PM"
          }
      },
      {
          "id": "2568",
          "type": "tag",
          "attributes": {
              "slug": "mo",
              "name": "MO"
          },
          "links": {
              "self": "/symbol/MO"
          }
      },
      {
          "id": "106821",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "daniel-giron",
              "userId": 56695834,
              "tagId": 658676,
              "image": {
                  "small": "https://static2.seekingalpha.com/images/users_profile/056/695/834/small_pic.png",
                  "medium": "https://static2.seekingalpha.com/images/users_profile/056/695/834/medium_pic.png",
                  "big": "https://static2.seekingalpha.com/images/users_profile/056/695/834/big_pic.png",
                  "extra_large": "https://static2.seekingalpha.com/images/users_profile/056/695/834/extra_large_pic.png"
              },
              "nick": "Daniel Giron",
              "bio": "<p>I am an experienced financial analyst with a background in banking. Throughout my career, I have gained a vast knowledge of credit risk and financial analysis. In my previous role at one of the largest banks in Europe, I was responsible for monitoring a portfolio of over 100 international corporates, which included tasks such as credit analysis, financial analysis, internal ratings, etc.<p></p></p> <p><span>I am a well-educated and passionate finance professional, holding a Master's degree in economics. Over the past four years, I have written over 100 credit rationales for the bank's risk department on international corporates.</span></p><p><p></p></p> <p><span>I am highly skilled in analyzing financial data and identifying risk factors, and I am committed to staying up-to-date with the latest developments in the finance industry. Overall, I am confident in my ability to provide valuable insights and recommendations to assist with investment decisions.</span></p><p><p></p></p>",
              "deactivated": null,
              "memberSince": 2022,
              "contributorSince": 2022,
              "followersCount": 376
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "56695834",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/daniel-giron",
              "profileUrl": "/author/daniel-giron",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "562",
          "type": "tag",
          "attributes": {
              "slug": "amzn",
              "name": "AMZN"
          },
          "links": {
              "self": "/symbol/AMZN"
          }
      },
      {
          "id": "575",
          "type": "tag",
          "attributes": {
              "slug": "msft",
              "name": "MSFT"
          },
          "links": {
              "self": "/symbol/MSFT"
          }
      },
      {
          "id": "137271",
          "type": "tag",
          "attributes": {
              "slug": "baba",
              "name": "BABA"
          },
          "links": {
              "self": "/symbol/BABA"
          }
      },
      {
          "id": "602137",
          "type": "tag",
          "attributes": {
              "slug": "babaf",
              "name": "BABAF"
          },
          "links": {
              "self": "/symbol/BABAF"
          }
      },
      {
          "id": "650",
          "type": "tag",
          "attributes": {
              "slug": "bidu",
              "name": "BIDU"
          },
          "links": {
              "self": "/symbol/BIDU"
          }
      },
      {
          "id": "1273",
          "type": "tag",
          "attributes": {
              "slug": "crm",
              "name": "CRM"
          },
          "links": {
              "self": "/symbol/CRM"
          }
      },
      {
          "id": "539",
          "type": "tag",
          "attributes": {
              "slug": "ibm",
              "name": "IBM"
          },
          "links": {
              "self": "/symbol/IBM"
          }
      },
      {
          "id": "7050",
          "type": "tag",
          "attributes": {
              "slug": "it",
              "name": "IT"
          },
          "links": {
              "self": "/symbol/IT"
          }
      },
      {
          "id": "663",
          "type": "tag",
          "attributes": {
              "slug": "orcl",
              "name": "ORCL"
          },
          "links": {
              "self": "/symbol/ORCL"
          }
      },
      {
          "id": "16041",
          "type": "tag",
          "attributes": {
              "slug": "tcehy",
              "name": "TCEHY"
          },
          "links": {
              "self": "/symbol/TCEHY"
          }
      },
      {
          "id": "15187",
          "type": "tag",
          "attributes": {
              "slug": "tctzf",
              "name": "TCTZF"
          },
          "links": {
              "self": "/symbol/TCTZF"
          }
      },
      {
          "id": "25250",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "wall-street-breakfast",
              "userId": 21001961,
              "tagId": 35794,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/021/001/961/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/021/001/961/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/021/001/961/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/021/001/961/extra_large_pic.png"
              },
              "nick": "Wall Street Breakfast",
              "bio": "Wall Street Breakfast, Seeking Alpha's flagship daily business news summary, is a one-page summary that gives you a rapid overview of the day's key financial news. It's designed for easy readability on the site or by email (including on mobile devices), and is published before 7:30 AM ET every market day. Wall Street Breakfast readership of over 3.4 million includes many from the investment-banking and fund-management industries.\r\nSign up here to receive the Wall Street Breakfast in your inbox every business day: http://seekingalpha.com/account/email_preferences",
              "deactivated": null,
              "memberSince": 2014,
              "contributorSince": 2011,
              "followersCount": 5745714
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "21001961",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/wall-street-breakfast",
              "profileUrl": "/author/wall-street-breakfast",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "39591",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "the-value-pendulum",
              "userId": 5969741,
              "tagId": 91421,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/005/969/741/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/005/969/741/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/005/969/741/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/005/969/741/extra_large_pic.png"
              },
              "nick": "The Value Pendulum",
              "bio": "<span>Asia Value & Moat Stocks is a research service for value investors searching for attractive Asia-listed investment opportunities  with a huge gap between price and intrinsic value, leaning towards both deep value balance sheet bargains (i.e. buying assets at a discount e.g. net cash stocks, net-nets, low P/B stocks, sum-of-the-parts discounts) and wide moat stocks (i.e. buying earnings power at a discount in great companies like \"Magic Formula\" stocks, high quality businesses, hidden champions and wide moat compounders).<br></span><p><br></p><p>Those who believe that the pendulum will move in one direction forever or reside at an extreme forever eventually will lose huge sums. Those who understand the pendulum's behavior can benefit enormously. ~ Howard Marks</p>",
              "deactivated": null,
              "memberSince": 2012,
              "contributorSince": 2012,
              "followersCount": 9794
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "5969741",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/the-value-pendulum",
              "profileUrl": "/author/the-value-pendulum",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "106427",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "simple-investing",
              "userId": 55407818,
              "tagId": 614223,
              "image": {
                  "small": "https://static2.seekingalpha.com/images/users_profile/055/407/818/small_pic.png",
                  "medium": "https://static2.seekingalpha.com/images/users_profile/055/407/818/medium_pic.png",
                  "big": "https://static2.seekingalpha.com/images/users_profile/055/407/818/big_pic.png",
                  "extra_large": "https://static2.seekingalpha.com/images/users_profile/055/407/818/extra_large_pic.png"
              },
              "nick": "Simple Investing",
              "bio": "<p>I am a portfolio manager with experience working for a hedge fund and a long-only equity fund with more than $1 billion in assets under management and I have a track record for outperformance in my portfolio. I have been writing consistently, with an article published each day on Seeking Alpha and on my Marketplace service.</p><p>Focused on long term investing, I believe in a barbell strategy in a portfolio, where there are both growth and value elements, which will be reflected in my articles. </p><p>I will be running a Marketplace service, Outperforming the Market, where I will share with you The Barbell Portfolio, which consists of high conviction growth and value stocks to help you outperform in the long-term, as well as The Price Target Report, which tells subscribers how much discount the stock is trading to intrinsic value and the upside potential. Lastly, subscribers will be able to get direct access to me and can ask me anything about the investment process or stock picks.</p><p><span>CFA charter holder and graduated with degrees in Finance and Accounting.</span><br></p>",
              "deactivated": null,
              "memberSince": 2021,
              "contributorSince": 2021,
              "followersCount": 3468
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "55407818",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/simple-investing",
              "profileUrl": "/author/simple-investing",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "547",
          "type": "tag",
          "attributes": {
              "slug": "ebay",
              "name": "EBAY"
          },
          "links": {
              "self": "/symbol/EBAY"
          }
      },
      {
          "id": "56",
          "type": "tag",
          "attributes": {
              "slug": "wmt",
              "name": "WMT"
          },
          "links": {
              "self": "/symbol/WMT"
          }
      },
      {
          "id": "24223",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "brad-thomas",
              "userId": 330973,
              "tagId": 17135,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/000/330/973/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/000/330/973/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/000/330/973/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/000/330/973/extra_large_pic.png"
              },
              "nick": "Brad Thomas",
              "bio": "<p>Brad Thomas is the CEO of <a href=\"https://www.widemoatresearch.com/\"><b>Wide Moat Research</b></a> (\"WMR\"), a subscription-based publisher of financial information, serving over 10,000 investors around the world. WMR has a team of experienced multi-disciplined analysts covering all dividend categories, including REITs, MLPs, BDCs, and traditional C-Corps. </p><p>The WMR brands include: (1) <a href=\"https://seekingalpha.com/author/brad-thomas/research\"><b>iREIT on Alpha</b></a> (Seeking Alpha), and (2) <a href=\"https://seekingalpha.com/author/the-dividend-kings/research\"><b>The Dividend Kings</b></a> (Seeking Alpha), and (3) Wide Moat Research. He <span>is also the editor of </span><a href=\"https://www.forbes.com/newsletters/forbes-real-estate-investor/\"><b>The Forbes Real Estate Investor</b></a>. </p><p>Thomas has also been featured in Barron's, Forbes Magazine, Kiplinger’s, US News & World Report, Money, NPR, Institutional Investor, GlobeStreet, CNN, Newsmax, and Fox. </p><p>He is the #1 contributing analyst on Seeking Alpha in 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, and 2022 (based on page views) and has over <b>106,000 followers</b> (on Seeking Alpha). Thomas is also the author of <a href=\"https://www.bradtom.com/publications/\"><b>The Intelligent REIT Investor</b></a> Guide (Wiley) and is writing a new book, REITs For Dummies. </p>Thomas received a Bachelor of Science degree in Business/Economics from Presbyterian College and he is married with 5 wonderful kids. He has over 30 years of real estate investing experience and is one of the <b>most prolific writers</b> on Seeking Alpha. To learn more about Brad visit <a href=\"https://www.bradtom.com/\"><b>HERE</b></a>.",
              "deactivated": null,
              "memberSince": 2009,
              "contributorSince": 2010,
              "followersCount": 107467
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "330973",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/brad-thomas",
              "profileUrl": "/author/brad-thomas",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "5946",
          "type": "tag",
          "attributes": {
              "slug": "hr",
              "name": "HR"
          },
          "links": {
              "self": "/symbol/HR"
          }
      },
      {
          "id": "4685",
          "type": "tag",
          "attributes": {
              "slug": "o",
              "name": "O"
          },
          "links": {
              "self": "/symbol/O"
          }
      },
      {
          "id": "6849",
          "type": "tag",
          "attributes": {
              "slug": "pld",
              "name": "PLD"
          },
          "links": {
              "self": "/symbol/PLD"
          }
      },
      {
          "id": "3624",
          "type": "tag",
          "attributes": {
              "slug": "psa",
              "name": "PSA"
          },
          "links": {
              "self": "/symbol/PSA"
          }
      },
      {
          "id": "9871",
          "type": "tag",
          "attributes": {
              "slug": "lsi",
              "name": "LSI"
          },
          "links": {
              "self": "/symbol/LSI"
          }
      },
      {
          "id": "106173",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "jr-research",
              "userId": 51630113,
              "tagId": 609990,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/051/630/113/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/051/630/113/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/051/630/113/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/051/630/113/extra_large_pic.png"
              },
              "nick": "JR Research",
              "bio": "<p>Unlock the secrets of successful investing with JR Research - led by founder and lead writer JR. Our dedicated team is laser-focused on providing you with the clarity you need to make confident investment decisions.<br></p><p>Transform your investment strategy with our popular marketplace service - specializing in a price-action-based approach to uncovering the hottest growth and technology stocks, backed by in-depth fundamental analysis. Plus, stay ahead of the game with our general stock analysis across a wide range of sectors and industries.<br></p><p></p><p></p><p>Improve your returns and stay ahead of the curve with our short- to medium-term stock analysis. We not only identify long-term potential but also seize opportunities to profit from short-term market swings, using a combination of long and short set-ups. Join us and start seeing experiencing the quality of our service today.</p><p>My LinkedIn: www.linkedin.com/in/seekjo</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>",
              "deactivated": null,
              "memberSince": 2020,
              "contributorSince": 2021,
              "followersCount": 21377
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "51630113",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/jr-research",
              "profileUrl": "/author/jr-research",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "34878",
          "type": "tag",
          "attributes": {
              "slug": "enph",
              "name": "ENPH"
          },
          "links": {
              "self": "/symbol/ENPH"
          }
      },
      {
          "id": "48431",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "mark-hibben",
              "userId": 6965821,
              "tagId": 102231,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/006/965/821/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/006/965/821/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/006/965/821/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/006/965/821/extra_large_pic.png"
              },
              "nick": "Mark Hibben",
              "bio": "Mark has a masters in Electrical Engineering from USC, is an independent iOS developer, and blogs about technology trends and companies, the focus of his investments.",
              "deactivated": null,
              "memberSince": 2013,
              "contributorSince": 2013,
              "followersCount": 19249
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "6965821",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/mark-hibben",
              "profileUrl": "/author/mark-hibben",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "93566",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "henrik-alex",
              "userId": 769697,
              "tagId": 538386,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/000/769/697/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/000/769/697/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/000/769/697/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/000/769/697/extra_large_pic.png"
              },
              "nick": "Henrik Alex",
              "bio": "<p>I am mostly a trader engaging in both long and short bets intraday and occasionally over the short- to medium term. My historical focus has been mostly on tech stocks but over the past couple of years I have also started broad coverage of the offshore drilling and supply industry as well as the shipping industry in general (tankers, containers, drybulk). In addition, I am having a close eye on the still nascent fuel cell industry.</p><p>I am located in Germany and have worked quite some time as an auditor for PricewaterhouseCoopers before becoming a daytrader almost 20 years ago. During this time, I managed to successfully maneuver the burst of the dotcom bubble and the aftermath of the world trade center attacks as well as the subprime crisis.</p><p>Despite not being a native speaker, I always try to deliver high quality research at no charge to followers and the entire Seeking Alpha community.</p>",
              "deactivated": null,
              "memberSince": 2010,
              "contributorSince": 2015,
              "followersCount": 15054
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "769697",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/henrik-alex",
              "profileUrl": "/author/henrik-alex",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "1447",
          "type": "tag",
          "attributes": {
              "slug": "rig",
              "name": "RIG"
          },
          "links": {
              "self": "/symbol/RIG"
          }
      },
      {
          "id": "105975",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "high-yield-investor",
              "userId": 52820996,
              "tagId": 607195,
              "image": {
                  "small": "https://static.seekingalpha.com/images/users_profile/052/820/996/small_pic.png",
                  "medium": "https://static.seekingalpha.com/images/users_profile/052/820/996/medium_pic.png",
                  "big": "https://static.seekingalpha.com/images/users_profile/052/820/996/big_pic.png",
                  "extra_large": "https://static.seekingalpha.com/images/users_profile/052/820/996/extra_large_pic.png"
              },
              "nick": "High Yield Investor",
              "bio": "<b><a href=\"https://seekingalpha.com/checkout?service_id=mp_1369\" target=\"_blank\">High Yield Investor</a></b> is a leading community of income investors that is supported by <a href=\"https://www.leonbergcapital.com/\" target=\"_blank\">Leonberg Capital</a>, a high yield specialist with over 2,500 clients, including hedge funds, private equity firms, family offices, and high net worth individuals. We spend 1000s of hours and over $100,000 per year researching the market and share the results with you at a tiny fraction of the cost. Joining our community will help you identify the most profitable opportunities BEFORE the end of the pandemic changes the entire dividend stock landscape and allow you to earn a sustainable 6-8% dividend yield that grows over time. <b><a href=\"https://seekingalpha.com/checkout?service_id=mp_1369\" target=\"_blank\">Click here to learn more!</a> </b><br><br>",
              "deactivated": null,
              "memberSince": 2020,
              "contributorSince": 2020,
              "followersCount": 11647
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "52820996",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/high-yield-investor",
              "profileUrl": "/author/high-yield-investor",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "3360",
          "type": "tag",
          "attributes": {
              "slug": "epd",
              "name": "EPD"
          },
          "links": {
              "self": "/symbol/EPD"
          }
      },
      {
          "id": "6586",
          "type": "tag",
          "attributes": {
              "slug": "paa",
              "name": "PAA"
          },
          "links": {
              "self": "/symbol/PAA"
          }
      },
      {
          "id": "108872",
          "type": "tag",
          "attributes": {
              "slug": "pagp",
              "name": "PAGP"
          },
          "links": {
              "self": "/symbol/PAGP"
          }
      },
      {
          "id": "90425",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "long-player",
              "userId": 1102834,
              "tagId": 521645,
              "image": {
                  "small": "https://static2.seekingalpha.com/images/users_profile/001/102/834/small_pic.png",
                  "medium": "https://static2.seekingalpha.com/images/users_profile/001/102/834/medium_pic.png",
                  "big": "https://static2.seekingalpha.com/images/users_profile/001/102/834/big_pic.png",
                  "extra_large": "https://static2.seekingalpha.com/images/users_profile/001/102/834/extra_large_pic.png"
              },
              "nick": "Long Player",
              "bio": "I am a high school teacher for a decade. Before that I was an analyst (operations and financial) and for a short time a Controller I have a B.S. with an emphasis in Accounting and an MBA (for which I studied Finance, Economics, and Management) I passed the CPA exam on the first try and am a retired CPA in the state of Maryland. I have a high school teaching credential and an MA in Math Education<br><p><br></p><p><b>Occassionally write articles for Rida Morwa''s High Dividend Opportunities https://seekingalpha.com/author/rida-morwa/research</b></p><p><b><br></b></p><p><b>Occassionally write articles on Tag Oil for the Panick High Yield Report</b></p><p><b>https://seekingalpha.com/account/research/subscribe?slug=richard-lejeune</b></p>",
              "deactivated": null,
              "memberSince": 2011,
              "contributorSince": 2015,
              "followersCount": 17698
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "1102834",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/long-player",
              "profileUrl": "/author/long-player",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "685",
          "type": "tag",
          "attributes": {
              "slug": "t",
              "name": "T"
          },
          "links": {
              "self": "/symbol/T"
          }
      },
      {
          "id": "601292",
          "type": "tag",
          "attributes": {
              "slug": "t.pa",
              "name": "T.PA"
          },
          "links": {
              "self": "/symbol/T.PA"
          }
      },
      {
          "id": "601293",
          "type": "tag",
          "attributes": {
              "slug": "t.pc",
              "name": "T.PC"
          },
          "links": {
              "self": "/symbol/T.PC"
          }
      },
      {
          "id": "585104",
          "type": "tag",
          "attributes": {
              "slug": "tbb",
              "name": "TBB"
          },
          "links": {
              "self": "/symbol/TBB"
          }
      },
      {
          "id": "584543",
          "type": "tag",
          "attributes": {
              "slug": "tbc",
              "name": "TBC"
          },
          "links": {
              "self": "/symbol/TBC"
          }
      },
      {
          "id": "5332",
          "type": "tag",
          "attributes": {
              "slug": "wbd",
              "name": "WBD"
          },
          "links": {
              "self": "/symbol/WBD"
          }
      },
      {
          "id": "102896",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "samuel-smith",
              "userId": 47771937,
              "tagId": 573365,
              "image": {
                  "small": "https://static1.seekingalpha.com/images/users_profile/047/771/937/small_pic.png",
                  "medium": "https://static1.seekingalpha.com/images/users_profile/047/771/937/medium_pic.png",
                  "big": "https://static1.seekingalpha.com/images/users_profile/047/771/937/big_pic.png",
                  "extra_large": "https://static1.seekingalpha.com/images/users_profile/047/771/937/extra_large_pic.png"
              },
              "nick": "Samuel Smith",
              "bio": "<p>Samuel Smith is Vice President at Leonberg Capital and manages the High Yield Investor Seeking Alpha Marketplace Service.</p><p><br></p><p>Samuel is a Professional Engineer and Project Management Professional by training and holds a B.S. in Civil Engineering and Mathematics from the United States Military Academy at West Point. He is a former Army officer, land development project engineer, and lead investment analyst at Sure Dividend.</p>",
              "deactivated": null,
              "memberSince": 2016,
              "contributorSince": 2017,
              "followersCount": 19638
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "47771937",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/samuel-smith",
              "profileUrl": "/author/samuel-smith",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "616586",
          "type": "tag",
          "attributes": {
              "slug": "abx:ca",
              "name": "ABX:CA"
          },
          "links": {
              "self": "/symbol/ABX:CA"
          }
      },
      {
          "id": "1006",
          "type": "tag",
          "attributes": {
              "slug": "gold",
              "name": "GOLD"
          },
          "links": {
              "self": "/symbol/GOLD"
          }
      },
      {
          "id": "80",
          "type": "tag",
          "attributes": {
              "slug": "gld",
              "name": "GLD"
          },
          "links": {
              "self": "/symbol/GLD"
          }
      },
      {
          "id": "23275",
          "type": "author",
          "attributes": {
              "company": null,
              "slug": "double-dividend-stocks",
              "userId": 418011,
              "tagId": 14440,
              "image": {
                  "small": "https://static3.seekingalpha.com/images/users_profile/000/418/011/small_pic.png",
                  "medium": "https://static3.seekingalpha.com/images/users_profile/000/418/011/medium_pic.png",
                  "big": "https://static3.seekingalpha.com/images/users_profile/000/418/011/big_pic.png",
                  "extra_large": "https://static3.seekingalpha.com/images/users_profile/000/418/011/extra_large_pic.png"
              },
              "nick": "Double Dividend Stocks",
              "bio": "<p>Robert Hauver, MBA, was VP of Finance for an industry-leading corporation for 18 years, and publishes SA articles under the name DoubleDividendStocks. TipRanks rates DoubleDividendStocks in the Top 25 of all financial bloggers, and Seeking Alpha rates us in the Top 5 of several categories, including Dividend Ideas, Basic Materials, and Utilities.  <br></p><p>\"Hidden Dividend Stocks Plus\", a Seeking Alpha Marketplace service, which focuses on undercovered and undervalued income vehicles. HDS+ scours the world's markets to find solid income opportunities with dividend yields ranging from 5% to 10%-plus, backed by strong earnings. <br></p>",
              "deactivated": null,
              "memberSince": 2009,
              "contributorSince": 2009,
              "followersCount": 37066
          },
          "relationships": {
              "user": {
                  "data": {
                      "id": "418011",
                      "type": "user"
                  }
              }
          },
          "links": {
              "self": "/author/double-dividend-stocks",
              "profileUrl": "/author/double-dividend-stocks",
              "site": null,
              "linkedinUrl": null,
              "twitterUrl": null
          }
      },
      {
          "id": "105362",
          "type": "tag",
          "attributes": {
              "slug": "xyld",
              "name": "XYLD"
          },
          "links": {
              "self": "/symbol/XYLD"
          }
      }
  ],
  "meta": {
      "page": {
          "title": "Stock Market Insights",
          "description": "Stock market Insights & financial analysis, including free earnings call transcripts, investment ideas and ETF & stock research written by finance experts.",
          "listTitle": "Trending Articles",
          "listDescription": null,
          "proStatus": 0,
          "uriImage": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
          "size": 20,
          "totalPages": 5,
          "total": 99,
          "minmaxPublishOn": {
              "min": 1676038500,
              "max": 1676024007
          }
      },
      "mone": {
          "params": {
              "pu": ""
          }
      }
  }
}

const News = () => {
  const [trendingArticles, setTrendingArticles] = useState(null);

  useEffect(() => {
    const getTrendingArticles = async () => {
      // const response = await fetch("https://seeking-alpha.p.rapidapi.com/articles/v2/list-trending?size=20", options);
      // const responseObj = await response.json();

      setTrendingArticles(responseObj);
    }

    if (trendingArticles === null) getTrendingArticles();
  }, []);

  return (
    <Page isGrid={false}>
      <HeaderBar title="Trending Articles" />
      <div className="overflow-y-scroll px-8">
        {responseObj.data.map(article => (
          <Article title={article.attributes.title} image={article.attributes.gettyImageUrl} url={article.links.self} />
        ))}
      </div>
    </Page>
  );
}

export default News;

