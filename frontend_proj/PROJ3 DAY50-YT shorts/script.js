const reels = [
  {
    username: "rakshit_dev",
    likeCount: 1240,
    isLiked: false,
    commentCount: 86,
    caption: "Late night coding session 💻🔥",
    video: "./videos/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 32,
    isFollowed: true
  },
  {
    username: "travelwithananya",
    likeCount: 5432,
    isLiked: true,
    commentCount: 210,
    caption: "Sunsets hit different in the mountains 🌄",
    video: "./videos/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "fitwithrahul",
    likeCount: 3210,
    isLiked: false,
    commentCount: 145,
    caption: "Push your limits every single day 💪",
    video: "./videos/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/75.jpg",
    shareCount: 64,
    isFollowed: true
  },
  {
    username: "foodie_riya",
    likeCount: 8765,
    isLiked: true,
    commentCount: 432,
    caption: "Street food tour in Delhi 😋",
    video: "./videos/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/68.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "techwitharjun",
    likeCount: 2150,
    isLiked: false,
    commentCount: 98,
    caption: "JavaScript tips you didn’t know ⚡",
    video: "./videos/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/12.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    username: "musicbykavya",
    likeCount: 6543,
    isLiked: true,
    commentCount: 305,
    caption: "New cover dropping soon 🎶",
    video: "./videos/video6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 178,
    isFollowed: false
  },
  {
    username: "wanderlust_aman",
    likeCount: 4321,
    isLiked: false,
    commentCount: 154,
    caption: "Exploring hidden waterfalls 🌊",
    video: "./videos/video7.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/55.jpg",
    shareCount: 89,
    isFollowed: true
  },
  {
    username: "designwithmegha",
    likeCount: 2890,
    isLiked: true,
    commentCount: 112,
    caption: "Minimal UI design inspiration ✨",
    video: "./videos/video6.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/33.jpg",
    shareCount: 52,
    isFollowed: false
  },
  {
    username: "gamer_adi",
    likeCount: 9100,
    isLiked: false,
    commentCount: 520,
    caption: "Clutch moment in ranked match 🎮",
    video: "./videos/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/90.jpg",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "dailyvibes_sana",
    likeCount: 1675,
    isLiked: true,
    commentCount: 74,
    caption: "Morning routines matter ☀️",
    video: "./videos/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/10.jpg",
    shareCount: 28,
    isFollowed: false
  }
];

var sum=''
reels.forEach((val)=>{
    sum+= `<div class="reel">
                    <video autoplay loop muted src=${val.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src=${val.userProfile} alt="">
                            <h4>${val.username}</h4>
                            <button>${val.isFollowed ? 'Following' : 'Follow'}</button>
                        </div>
                        <h3>${val.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${val.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})
var allReels= document.querySelector('.all-reels')
allReels.innerHTML= sum;