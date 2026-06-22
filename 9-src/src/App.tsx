import React, { memo } from 'react';
import { Search, Bell, ThumbsUp, Heart } from 'lucide-react';

const Comment = memo(({ comment }: { comment: any }) => {
  return (
    <div className="flex gap-2 mb-4 text-[15px] leading-tight font-sans">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-10 h-10 rounded-full object-cover shrink-0 mt-1 shadow-sm"
        loading="lazy"
      />
      <div className="flex flex-col w-full">
        <div className="bg-[#f0f2f5] rounded-2xl px-3 py-2 w-fit">
          <p className="font-semibold text-[#385898] hover:underline cursor-pointer">
            {comment.author}
          </p>
          <p className="text-[#050505] mt-0.5 whitespace-pre-wrap">
            {comment.replyTo && (
              <span className="font-semibold text-[#385898] hover:underline cursor-pointer mr-1">
                {comment.replyTo}
              </span>
            )}
            {comment.text}
          </p>
        </div>
        
        {/* Comment Action Bar */}
        <div className="flex items-center gap-4 text-xs font-bold text-[#65676b] mt-1 ml-2">
          <button className="hover:underline">Like</button>
          <span>·</span>
          <button className="hover:underline">Reply</button>
          <span>·</span>
          <span className="font-normal">{comment.time}</span>
          
          <div className="flex items-center gap-1 ml-auto shrink-0 bg-white shadow-sm border border-gray-100 rounded-full px-1.5 py-0.5">
            <div className="flex -space-x-1">
               <div className="bg-[#1877f2] rounded-full p-[2px]">
                   <ThumbsUp className="w-3 h-3 text-white fill-white" />
               </div>
               <div className="bg-[#f33e58] rounded-full p-[2px]">
                   <Heart className="w-3 h-3 text-white fill-white" />
               </div>
            </div>
            <span className="text-[#65676b] font-normal">{comment.likes}</span>
          </div>
        </div>

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2 flex flex-col gap-2">
            {comment.replies.map((reply: any) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default function App() {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a38a5131299d5533b3a9bda/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const commentsData = [
    {
      id: 1,
      author: "Sophie Robinson",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      time: "2h",
      likes: 21,
      text: "Wait what's the actual recipe? Do I need to watch the whole thing?",
      replies: [
        {
          id: 11,
          author: "Victoria Carter",
          replyTo: "Sophie Robinson",
          avatar: "https://randomuser.me/api/portraits/women/24.jpg",
          time: "1h",
          likes: 18,
          text: "yeah she breaks it down early on. Worth watching tbh"
        }
      ]
    },
    {
      id: 2,
      author: "Lisa G.",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      time: "1h",
      likes: 46,
      text: "Ngl I only watched cause of Oprah but the baking soda recipe actually makes sense when she breaks down the science. Def gonna try it 👀"
    },
    {
       id: 3,
       author: "Madison Scott",
       avatar: "https://randomuser.me/api/portraits/women/48.jpg",
       time: "55 min",
       likes: 63,
       text: "3 weeks in and my coworker asked if I got work done 😂 nope just baking soda apparently"
    },
    {
       id: 4,
       author: "Charlotte Williams",
       avatar: "https://randomuser.me/api/portraits/women/60.jpg",
       time: "40 min",
       likes: 58,
       text: "Ok I almost scrolled past this but I'm glad I didn't. Started the baking soda shot 2 weeks ago and my jeans are already looser. Not saying it's magic but something is definitely working"
    },
    {
       id: 5,
       author: "Daisy Collins",
       avatar: "https://randomuser.me/api/portraits/women/72.jpg",
       time: "32 min",
       likes: 14,
       text: "Is this actually legit or just another internet thing??",
       replies: [
           {
               id: 51,
               author: "Emily Lewis",
               replyTo: "Daisy Collins",
               avatar: "https://randomuser.me/api/portraits/women/84.jpg",
               time: "28 min",
               likes: 35,
               text: "I literally said the same thing lol. Try it for a week and see. My bloating went down first and now I'm back in my size 6 jeans that were sitting in my closet for like 2 years"
           }
       ]
    },
    {
       id: 6,
       author: "Olivia Martinez",
       avatar: "https://randomuser.me/api/portraits/women/90.jpg",
       time: "20 min",
       likes: 49,
       text: "I've done keto, IF, ozempic... this is the first time I'm not white-knuckling it. The cravings just kinda stopped? Idk how to explain"
    },
    {
       id: 7,
       author: "Emma Clark",
       avatar: "https://randomuser.me/api/portraits/women/95.jpg",
       time: "just now",
       likes: 72,
       text: "2 months in. down 29 lbs. no gym. i'm honestly confused how this isn't bigger news 🤷‍♀️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Mobile-first specific container */}
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen pb-8">
        
        {/* Header - TODAY Fake Logo */}
        <header className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <div className="flex flex-col w-40">
            <svg viewBox="0 0 200 45" className="w-full h-auto">
              {/* Outer Arch */}
              <path d="M 10 40 A 22 22 0 0 1 54 40" fill="none" stroke="#DE4A09" strokeWidth="6.5" />
              {/* Middle Arch */}
              <path d="M 19 40 A 13 13 0 0 1 45 40" fill="none" stroke="#DE4A09" strokeWidth="6.5" />
              {/* Inner Solid Semi-circle */}
              <path d="M 28 40 A 4 4 0 0 1 36 40 Z" fill="#DE4A09" />
              <text x="62" y="40" fontSize="34" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="start" fill="#000" letterSpacing="-1px">
                 TODAY
              </text>
            </svg>
          </div>
          <button aria-label="Search" className="p-1">
            <Search className="w-6 h-6 text-gray-800" />
          </button>
        </header>

        <main className="px-4 py-4">
          {/* Headline */}
          <h1 className="text-[22px] md:text-2xl font-bold leading-tight text-[#1a1a1a] mb-4">
            Oprah Reveals the 9-Minute Morning Ritual That Replaced Her Ozempic — "I Lost 43 Pounds and It Never Came Back"
          </h1>

          {/* VSL Video Vturb */}
          <div className="w-full mb-6">
            {/* @ts-ignore */}
            <vturb-smartplayer id="vid-6a38a5131299d5533b3a9bda" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px'}}></vturb-smartplayer>
          </div>

          {/* CTA Button (Hidden by default, shown by Vturb at specific pitch moment) */}
          <div className="w-full flex justify-center mb-6">
            <a href="https://checkout.kashpay.com.br/checkout/checkout-1777486759071" className="vsl bg-[#22c55e] hover:bg-[#16a34a] text-white text-2xl font-black py-4 px-8 rounded-full w-full max-w-[400px] text-center shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide border-b-4 border-[#15803d] active:border-b-0 active:translate-y-0">
              Get Instant Access to SlimTide
            </a>
          </div>

          {/* Notifications / Tags Area */}
          <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-2">
             <div className="flex items-center gap-2 text-[#4b4f56] mb-3">
                 <Bell className="w-5 h-5" />
                 <span className="text-[15px]">Stay updated with TODAY's health reports</span>
             </div>
             <div className="flex flex-wrap items-center justify-center gap-2">
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #NaturalRemedies
                 </span>
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #HealthBreakthrough
                 </span>
                 <span className="bg-[#f0f2f5] text-[#1c1e21] px-3 py-1.5 rounded-full text-sm font-semibold">
                    #TODAYExclusive
                 </span>
             </div>
          </div>

          {/* Comments Section */}
          <div className="pt-2">
             {commentsData.map((comment) => (
               <Comment key={comment.id} comment={comment} />
             ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-6 text-sm text-[#65676b] font-semibold border-t pt-4">
             This post is no longer receiving comments!
          </div>

        </main>
      </div>
    </div>
  );
}
