import { FileText, Users, MessageSquare, ShieldCheck, Check, Star, Sparkles, ArrowRight, Zap, Crown, TrendingUp, Lock, Send, Rocket, Target, Award } from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

const content = [
  {
    title: "Post a Project",
    description:
      "Describe your project, set your budget, and specify the skills you need. Our platform makes it easy to outline exactly what you're looking for.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <motion.div 
          className="w-full max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Card with gradient border */}
          <div className="relative group">
            {/* Animated gradient border */}
            <motion.div 
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-primary opacity-70"
              animate={{ 
                background: [
                  "linear-gradient(0deg, hsl(var(--primary)), hsl(var(--primary)/0.5), hsl(var(--primary)))",
                  "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary)/0.5), hsl(var(--primary)))",
                  "linear-gradient(360deg, hsl(var(--primary)), hsl(var(--primary)/0.5), hsl(var(--primary)))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with animated icon */}
              <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent px-6 py-5 border-b border-border">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FileText className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="text-foreground font-bold text-lg">Create Project</h4>
                    <p className="text-sm text-muted-foreground">Fill in the details</p>
                  </div>
                  <motion.div 
                    className="ml-auto"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-6 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">Project Title</label>
                  <motion.div 
                    className="h-12 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-transparent px-4 flex items-center"
                    animate={{ borderColor: ["hsl(var(--primary)/0.3)", "hsl(var(--primary)/0.6)", "hsl(var(--primary)/0.3)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-foreground font-semibold">E-commerce Redesign</span>
                    <motion.span 
                      className="w-0.5 h-5 bg-primary ml-1 rounded-full"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">Budget</label>
                    <motion.div 
                      className="h-12 rounded-xl border-2 border-primary bg-primary/10 px-4 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <TrendingUp className="w-4 h-4 text-primary mr-2" />
                      <span className="text-primary font-bold">₹2L - ₹5L</span>
                    </motion.div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">Timeline</label>
                    <div className="h-12 rounded-xl border border-border bg-muted/30 px-4 flex items-center justify-center">
                      <span className="text-foreground font-medium">4-6 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-3 block uppercase tracking-wider">Required Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "UI/UX", "TypeScript"].map((skill, i) => (
                      <motion.span 
                        key={skill}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 cursor-pointer shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.button 
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px hsl(var(--primary)/0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  Post Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Get Matched",
    description:
      "We match you with vetted Freelance Teams or Skilled individuals that fit your requirements. No more endless searching through profile.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4">
          {/* Header with animation */}
          <motion.div 
            className="flex items-center justify-between mb-2 px-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-foreground font-bold text-lg">Top Matches</span>
            </div>
            <motion.span 
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              3 teams found
            </motion.span>
          </motion.div>
          
          {[
            { name: "Team Alpha", match: 98, members: 4, rating: 4.9, avatar: "🚀", highlight: true },
            { name: "DevStudio", match: 95, members: 3, rating: 4.8, avatar: "⚡" },
            { name: "PixelCraft", match: 92, members: 5, rating: 4.7, avatar: "🎨" },
          ].map((team, i) => (
            <motion.div 
              key={i} 
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, x: 8 }}
              className={`relative rounded-2xl p-5 border-2 transition-all cursor-pointer overflow-hidden ${
                team.highlight 
                  ? "border-primary bg-gradient-to-r from-card via-primary/5 to-card shadow-xl shadow-primary/10" 
                  : "border-border bg-card hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {/* Highlight shimmer effect */}
              {team.highlight && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              )}
              
              <div className="relative flex items-center gap-4">
                <motion.div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                    team.highlight ? "bg-gradient-to-br from-primary/20 to-primary/10" : "bg-muted"
                  }`}
                  animate={team.highlight ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {team.avatar}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-foreground font-bold">{team.name}</p>
                    {team.highlight && (
                      <motion.span 
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-[10px] font-bold shadow-md"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Crown className="w-3 h-3" />
                        BEST
                      </motion.span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {team.members}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground">{team.rating}</span>
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <motion.div 
                    className={`text-3xl font-black ${team.highlight ? "text-primary" : "text-foreground"}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {team.match}%
                  </motion.div>
                  <span className="text-xs text-muted-foreground font-medium uppercase">match</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Collaborate",
    description:
      "Work directly with your team and have discussions on our platform with the built-in Project Management tool. Everything you need in one place.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm">
          {/* Chat Container with gradient border */}
          <div className="relative">
            <motion.div 
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/50 via-transparent to-primary/50 opacity-50"
              animate={{ 
                background: [
                  "linear-gradient(0deg, hsl(var(--primary)/0.5), transparent, hsl(var(--primary)/0.5))",
                  "linear-gradient(180deg, hsl(var(--primary)/0.5), transparent, hsl(var(--primary)/0.5))",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
              {/* Chat Header */}
              <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {["🧑‍💻", "👩‍🎨", "👨‍💼"].map((emoji, i) => (
                        <motion.div 
                          key={i} 
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted/80 border-3 border-card flex items-center justify-center text-lg shadow-md"
                          initial={{ scale: 0, x: -20 }}
                          animate={{ scale: 1, x: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <p className="text-foreground font-bold">Project Chat</p>
                      <div className="flex items-center gap-2">
                        <motion.span 
                          className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-muted-foreground">3 online</span>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    className="p-2 rounded-xl bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="px-5 py-5 space-y-4 bg-gradient-to-b from-muted/20 to-transparent min-h-[200px]">
                <motion.div 
                  className="flex gap-3"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-blue-500/30">A</div>
                  <div>
                    <div className="bg-card rounded-2xl rounded-tl-md px-4 py-3 shadow-lg border border-border">
                      <p className="text-foreground text-sm">Design mockups are ready! 🎨</p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 mt-1">2m ago</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-3 justify-end"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 shadow-lg shadow-primary/20">
                      <p className="text-sm font-medium">Looks amazing! Starting dev now 🚀</p>
                    </div>
                    <span className="text-xs text-muted-foreground mr-2 mt-1">Just now</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0 border-2 border-primary/30">Y</div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-3"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-purple-500/30">B</div>
                  <div className="bg-card rounded-2xl rounded-tl-md px-5 py-3 shadow-lg border border-border">
                    <motion.div 
                      className="flex gap-1.5"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span 
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-muted-foreground"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Input */}
              <div className="px-5 py-4 border-t border-border bg-card/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-11 rounded-xl bg-muted/50 px-4 flex items-center border border-border">
                    <span className="text-muted-foreground text-sm">Type a message...</span>
                  </div>
                  <motion.button 
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-5 h-5 text-primary-foreground" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Pay Securely",
    description:
      "Only release payments when you are satisfied with the milestone deliverables. Secure escrow system protects both you and your team.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm">
          {/* Card with animated gradient */}
          <div className="relative">
            <motion.div 
              className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-60"
              animate={{ 
                background: [
                  "linear-gradient(0deg, #22c55e, #10b981, #22c55e)",
                  "linear-gradient(180deg, #22c55e, #10b981, #22c55e)",
                  "linear-gradient(360deg, #22c55e, #10b981, #22c55e)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              {/* Total Header */}
              <div className="bg-gradient-to-r from-green-500/15 via-emerald-500/10 to-transparent px-6 py-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Project Total</p>
                    <motion.p 
                      className="text-4xl font-black text-foreground"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ₹2,00,000
                    </motion.p>
                  </div>
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-500/40"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <motion.div 
                  className="flex items-center gap-2 mt-4 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/30 w-fit"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span 
                    className="w-2.5 h-2.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-bold">Escrow Protected</span>
                </motion.div>
              </div>
              
              {/* Milestones */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-foreground flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Milestones
                  </p>
                  <span className="text-xs text-muted-foreground">2 of 3 complete</span>
                </div>
                
                {[
                  { name: "Design Phase", amount: "₹50,000", status: "complete", icon: "✅" },
                  { name: "Development", amount: "₹1,00,000", status: "active", icon: "🔄" },
                  { name: "Testing & Launch", amount: "₹50,000", status: "pending", icon: "⏳" },
                ].map((milestone, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      milestone.status === "complete" 
                        ? "border-green-500/40 bg-gradient-to-r from-green-500/10 to-transparent" 
                        : milestone.status === "active"
                        ? "border-primary/40 bg-gradient-to-r from-primary/10 to-transparent shadow-lg"
                        : "border-border bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.span 
                        className="text-xl"
                        animate={milestone.status === "active" ? { rotate: 360 } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        {milestone.icon}
                      </motion.span>
                      <div>
                        <p className={`font-bold text-sm ${
                          milestone.status === "complete" ? "text-green-600" : 
                          milestone.status === "active" ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {milestone.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {milestone.status === "complete" ? "Completed" : 
                           milestone.status === "active" ? "In Progress" : "Upcoming"}
                        </p>
                      </div>
                    </div>
                    <span className={`font-black text-lg ${
                      milestone.status === "complete" ? "text-green-600" : 
                      milestone.status === "active" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {milestone.amount}
                    </span>
                  </motion.div>
                ))}
                
                <motion.button 
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg flex items-center justify-center gap-3 mt-5 shadow-xl shadow-green-500/30"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Check className="w-6 h-6" />
                  Release Payment
                  <Sparkles className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-how-it-works">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <StickyScroll
        content={content}
        header={
          <div className="relative">
            {/* Animated background elements */}
            <motion.div 
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/15 rounded-full blur-[80px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 text-sm font-bold text-primary border-2 border-primary/30 rounded-full mb-8 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 shadow-xl shadow-primary/10 relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">How It Works</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="text-4xl lg:text-6xl font-black text-foreground mb-6"
            >
              Simple Steps to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Success
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-primary/20 rounded-full blur-lg"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.path
                    d="M0 6 Q 50 12, 100 6 T 200 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed"
            >
              From posting your project to secure payment, we've streamlined the entire process for seamless collaboration.
            </motion.p>
          </div>
        }
      />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HowItWorks;
