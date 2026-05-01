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
    s.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/69f526e22cdb6c72eb22f823/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const commentsData = [
    {
      id: 1,
      author: "Sarah Smith",
      avatar: "https://i.pravatar.cc/150?u=sarahsmith",
      time: "2h",
      likes: 23,
      text: "OMG! My doctor couldn't believe it. I lost so much belly fat with this gelatin trick that he thought I was starving myself. But my tests show I'm healthier than ever!",
      replies: [
        {
          id: 11,
          author: "Jennifer Taylor",
          replyTo: "Sarah Smith",
          avatar: "https://i.pravatar.cc/150?u=jennifertaylor",
          time: "35 min",
          likes: 17,
          text: "Girl, I melted 11 pounds in just a week! This gelatin trick is unreal!"
        }
      ]
    },
    {
      id: 2,
      author: "Olivia Moore",
      avatar: "https://i.pravatar.cc/150?u=oliviamoore",
      time: "7 min",
      likes: 11,
      text: "I've been using this gelatin trick for just over 3 weeks, and my belly fat is literally melting off! Even my husband noticed and complimented me today!"
    },
    {
       id: 3,
       author: "Jessica Brown",
       avatar: "https://i.pravatar.cc/150?u=jessicabrown",
       time: "6 min",
       likes: 32,
       text: "Finally, someone explained a solution that melts fat without all the medical jargon! I'm starting the gelatin trick this morning—thank you for being so clear!"
    },
    {
       id: 4,
       author: "Jennifer Taylor",
       avatar: "https://i.pravatar.cc/150?u=jennifertaylor",
       time: "5 min",
       likes: 6,
       text: "My binge eating used to control me. But after starting the gelatin trick, I don't crave sweets anymore. I've already melted 19 pounds in two weeks—it feels amazing!",
       replies: [
           {
               id: 41,
               author: "Emily Johnson",
               replyTo: "Jennifer Taylor",
               avatar: "https://i.pravatar.cc/150?u=emilyjohnson",
               time: "1h",
               likes: 34,
               text: "That's insane! Did you change anything else or just the gelatin trick?"
           },
           {
               id: 42,
               author: "Jennifer Taylor",
               replyTo: "Emily Johnson",
               avatar: "https://i.pravatar.cc/150?u=jennifertaylor",
               time: "1h",
               likes: 32,
               text: "Nothing else—just the gelatin trick! No diet, no gym. It's wild how much fat I'm melting!"
           }
       ]
    },
    {
       id: 5,
       author: "Ashley Davis",
       avatar: "https://i.pravatar.cc/150?u=ashleydavis",
       time: "1h",
       likes: 34,
       text: "Does anyone know if this gelatin trick really works? I'm extremely overweight and feeling desperate!",
       replies: [
           {
               id: 51,
               author: "Morgan Rose",
               replyTo: "Ashley Davis",
               avatar: "https://i.pravatar.cc/150?u=morganrose",
               time: "1h",
               likes: 31,
               text: "Yes! I looked it up—there are studies backing it. My belly fat is melting away thanks to this gelatin trick. Give it a try!"
           }
       ]
    },
    {
       id: 6,
       author: "Natalie Clark",
       avatar: "https://i.pravatar.cc/150?u=natalieclark",
       time: "1h",
       likes: 54,
       text: "This is the most honest solution I've seen. No long videos, no upsells—just a simple gelatin trick that melts belly fat. Thank you so much!"
    },
    {
       id: 7,
       author: "Chloe Garcia",
       avatar: "https://i.pravatar.cc/150?u=chloegarcia",
       time: "1h",
       likes: 59,
       text: "After 3 weeks with the gelatin trick, my belly is flat like a board. I've melted 26 pounds without dieting—I feel lighter and more beautiful already!"
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
            Dr. Oz Reveals the Gelatin Recipe to Lose 15 Pounds Before {currentMonth} Ends
          </h1>

          {/* VSL Video Vturb */}
          <div className="w-full mb-6">
            {/* @ts-ignore */}
            <vturb-smartplayer id="vid-69f526e22cdb6c72eb22f823" style={{display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px'}}></vturb-smartplayer>
          </div>

          {/* CTA Button (Hidden by default, shown by Vturb at specific pitch moment) */}
          <div className="w-full flex justify-center mb-6">
            <a href="https://checkout.kashpay.com.br/checkout/checkout-1777486759071" className="hide_19lead5 bg-[#22c55e] hover:bg-[#16a34a] text-white text-2xl font-black py-4 px-8 rounded-full w-full max-w-[400px] text-center shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide border-b-4 border-[#15803d] active:border-b-0 active:translate-y-0">
              Get Now
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
