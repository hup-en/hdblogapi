var express = require("express");
var app = express();

var blog = [
  {
    id: 1,
    name: "Background Mask And Background Pattern For Divi",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2022/03/Blog-Cover-–-9.png",
    url: "https://www.huppen.com.np/background-mask-and-background-pattern-for-divi/",
  },
  {
    id: 2,
    name: "New Teaching License Syllabus For Secondary And Lower Secondary Levels: TSC",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2022/03/Blog-Cover-–-6.png",
    url: "https://www.huppen.com.np/new-teaching-license-syllabus-for-secondary-and-lower-secondary-levels-tsc/",
  },
  {
    id: 3,
    name: "A Quick Guide to ListView In Flutter - Hupen Design",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2021/12/Blog-Cover-–-4.png",
    url: "https://www.huppen.com.np/a-quick-guide-to-listview-in-flutter-hupen-design/",
  },
  {
    id: 4,
    name: "Five useful flutter commands - Flutter development",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2021/08/Blog-Cover-–-3.png",
    url: "https://www.huppen.com.np/five-useful-flutter-commands-flutter-development/",
  },
  {
    id: 5,
    name: "Five Websites To Find Freelance Jobs in 2021 For Web Developers",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2021/06/Blog-Cover-–-1.png",
    url: "https://www.huppen.com.np/five-websites-to-find-freelance-jobs-in-2021-for-web-developers/",
  },
  {
    id: 6,
    name: "Eight Essential Website Design Steps Behind The Scene",
    imgurl:
      "https://www.huppen.com.np/wp-content/uploads/2021/04/Blog-Cover.png",
    url: "https://www.huppen.com.np/eight-essential-website-design-steps-behind-the-scene/",
  },
  {
    id: 7,
    name: "Mahabir Pun A Visionary Social Entrepreneur",
    imgurl: "https://www.huppen.com.np/wp-content/uploads/2021/04/Mahabir.jpg",
    url: "https://www.huppen.com.np/mahabir-pun-a-visionary-social-entrepreneur/",
  },
];
app.get("/", function (req, res) {
  res.json(blog);
});

app.listen(process.env.PORT || 3000);
