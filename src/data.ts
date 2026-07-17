import { Article, RecommendedItem } from './types';

export const articles: Record<string, Article> = {
  'election-intelligence': {
    id: 'election-intelligence',
    category: 'weight loss',
    title: 'Melanie Reveals the At-Home Protocol That Replaced Her Weight-Loss Injections — "I Lost 63 Pounds in 60 Days Without Dieting"',
    subheading: 'She says four simple ingredients recreate the effects of GLP-1 injections at home — activating three fat-burning hormones while she still eats pizza, pasta, and dessert',
    author: {
      name: "Ashley J. DiMella",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      title: "Digital Reporter",
      bio: "Ashley J. DiMella is a digital reporter for Fox News. She covers national security, politics, and technology policy. Follow her on Twitter/X @AshleyDiMella."
    },
    publishDate: "Published July 16, 2026 9:27pm EDT",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    body: [
      "Former President Donald Trump on Thursday released a comprehensive set of declassified intelligence and investigative files, claiming that the newly public documents expose critical security vulnerabilities in the nation's ballot-counting infrastructure and document external attempts at voter roll interference.",
      "The release includes detailed memos from security analysts, intelligence briefs on foreign cyber-targeting, and audit reports concerning several battleground jurisdictions, with a significant emphasis on Michigan and Georgia.",
      "According to the declassified files, several legacy electronic tabulators utilized older firmware versions that cybersecurity personnel flagged as susceptible to network penetration under highly specific laboratory conditions, although officials note there is no direct evidence that any machine was compromised in an active election.",
      "The documents also highlight intelligence reports regarding active operations by foreign adversaries, most notably China and Iran, aimed at probing state-level voter registration databases and launching social media influence campaigns designed to undermine public trust in democratic systems.",
      "In a statement accompanying the release, Trump praised the transparency efforts. 'The American people deserve to see the full scope of what our intelligence community has compiled,' he said. 'These declassified briefings reveal shocking vulnerabilities that must be addressed immediately to guarantee the absolute sanctity of future ballots.'",
      "Critics, however, argue that releasing raw intelligence briefs without complete context could be weaponized to sew distrust. Senate Intelligence Committee members released a joint statement calling for a balanced review, cautioning that many of the flagged security concerns have already been mitigated through offline paper-trail audits, end-to-end encryption upgrades, and independent security sweeps conducted by the Cybersecurity and Infrastructure Security Agency (CISA).",
      "The Department of Justice and CISA have reiterated their confidence in the security of modern election systems, emphasizing that coordinated hand-count checks remain the primary defense against digital anomalies."
    ]
  },
  'tyrus-american-dream': {
    id: 'tyrus-american-dream',
    category: 'OPINION',
    title: "Tyrus: The American Dream is not supposed to be easy, it's supposed to be earned",
    subheading: "Fox News contributor Tyrus reacts to new economic indicators and shares his personal philosophy on hard work, resilience, and reclaiming national unity.",
    author: {
      name: "Tyrus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      title: "Fox News Contributor",
      bio: "Tyrus is a Fox News contributor, best-selling author, and host of 'Tyrus and Timpf' podcast. He appears regularly on 'Gutfeld!'."
    },
    publishDate: "Published July 16, 2026 8:45pm EDT",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    body: [
      "Fox News contributor and host Tyrus delivered a passionate monologue during his latest broadcast, addressing the changing perceptions of the American Dream among younger generations.",
      "Tyrus challenged the narrative that economic success should be guaranteed by administrative programs, arguing instead that true fulfillment comes from navigating adversity and earning one's achievements.",
      "'The American Dream was never a guarantee of an easy ride. It is an invitation to get in the arena and fight for your future,' Tyrus declared. 'When you struggle, you build character. When you earn it with your own hands, nobody can ever take that achievement away from you.'",
      "Pointing to his own journey from professional wrestling to media commentary and best-selling authorship, Tyrus emphasized that the path to success is rarely a straight line. He called for a renewed cultural emphasis on personal accountability, self-reliance, and mentorship in local communities.",
      "He also addressed rising political polarization, urging citizens to find common ground in everyday interactions rather than focusing on online talking points. 'Our neighbors aren't our enemies,' Tyrus concluded. 'We need to start talking to each other again, respecting the grind, and building each other up.'"
    ]
  },
  'kennedy-mocks-newsom': {
    id: 'kennedy-mocks-newsom',
    category: 'POLITICS',
    title: "Kennedy mocks Newsom's speaking style as 'failed corporate PR double-talk'",
    subheading: "Fox Business host Kennedy takes aim at California Governor Gavin Newsom's latest press conference addressing energy policy and economic initiatives.",
    author: {
      name: "Lisa Kennedy Montgomery",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      title: "Fox Business Host",
      bio: "Lisa Kennedy Montgomery (Kennedy) is the host of 'Kennedy' on Fox Business Network and a frequent guest on Outnumbered and The Five."
    },
    publishDate: "Published July 16, 2026 7:15pm EDT",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    body: [
      "On Thursday's edition of 'The Five', Fox Business host Lisa Kennedy Montgomery took California Governor Gavin Newsom to task over his rhetoric, characterizing his latest televised energy briefing as a masterclass in obfuscation.",
      "Kennedy parodied Newsom's frequent use of buzzwords such as 'bifurcated modalities,' 'stakeholder synergy,' and 'proactive deliverables' to describe California's complex green transition guidelines.",
      "'It is classic corporate double-talk. It sounds incredibly sophisticated until you try to write down what he actually said,' Kennedy mocked. 'He talks about energy sustainability with the cadence of a Silicon Valley tech startup CEO pitching a product that doesn't exist yet.'",
      "The discussion centered on California's new summer electrical grid mandates, which ask residents to conserve power during peak heat waves while simultaneously transition to electric appliances and vehicles.",
      "Co-host Jesse Watters agreed, arguing that the jargon is designed to shift attention away from higher cost-of-living indicators and infrastructure strain. Panelists debated whether Newsom's communication style would resonate with voters in national battlegrounds, or if it would alienate middle-class families facing rising utility bills."
    ]
  },
  'china-interference': {
    id: 'china-interference',
    category: 'NATIONAL SECURITY',
    title: "Bipartisan task force investigates new claims of sophisticated cyber probes from China",
    subheading: "Intelligence officials warn that overseas hackers are targeting local municipal voter systems using advanced spear-phishing techniques.",
    author: {
      name: "Ashley J. DiMella",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      title: "Digital Reporter",
      bio: "Ashley J. DiMella is a digital reporter for Fox News. She covers national security, politics, and technology policy. Follow her on Twitter/X @AshleyDiMella."
    },
    publishDate: "Published July 16, 2026 6:00pm EDT",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    body: [
      "A bipartisan coalition of lawmakers has convened a special task force to examine a series of highly sophisticated cyber probes targeting county-level database systems in critical swing states.",
      "Intelligence officials briefed the committee on what they described as a coordinated campaign originating from threat actors connected to the Chinese Ministry of State Security. The campaign reportedly utilizes customized malware designed to silently map network architectures without triggering standard administrative alarms.",
      "While federal agencies emphasize that voter tallies remain offline and immune to remote manipulation, the digital probes directed at voter-registration rolls raise concerns about potential attempts to cause administrative confusion on election day.",
      "Representative Mike Gallagher, co-chairing the inquiry, noted: 'The threat is persistent, adaptive, and highly focused. We are working closely with local state secretaries to provide immediate hardware firewalls and automated threat-detection tools.'",
      "The task force is scheduled to release a set of emergency security recommendations ahead of the upcoming legislative recess, urging states to expand auditing programs and establish mandatory paper backups for all registration ledger updates."
    ]
  }
};

export const recommendedVideos: RecommendedItem[] = [
  {
    id: 'tyrus-american-dream',
    title: "Tyrus: The American Dream is not supposed to...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'video',
    duration: '06:42',
    views: '45K views'
  },
  {
    id: 'kennedy-mocks-newsom',
    title: "Kennedy mocks Newsom's speaking style as 'failed...",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'video',
    duration: '04:15',
    views: '112K views'
  },
  {
    id: 'live-broadcast',
    title: "LIVE: Fox News coverage of Trump election brief release",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'video',
    duration: 'LIVE',
    views: '23K watching'
  }
];

export const recommendedArticles: RecommendedItem[] = [
  {
    id: 'election-intelligence',
    title: "Trump releases declassified election intelligence, says it reveals...",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'article',
    category: 'DONALD TRUMP'
  },
  {
    id: 'china-interference',
    title: "Bipartisan task force investigates claims of overseas cyber probes",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'article',
    category: 'NATIONAL SECURITY'
  },
  {
    id: 'voter-rolls',
    title: "How states are cleaning up voter registration lists for transparency",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&w=400&h=225&q=80",
    type: 'article',
    category: 'ELECTION SECURITY'
  }
];
