import Image from "next/image";
import { socialLinks } from "./config";
import StarsBackground from "./stars-background";

export default function Page() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-2 relative">
      <StarsBackground />
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full max-w-2xl gap-6 sm:gap-16 relative z-10">
        {/* Main Content */}
        <div className="flex-1 w-full">
          <h2 className="text-xl font-semibold mb-2 mt-2">engineer ~ building AI, web3 & cloud</h2>
          <p className="mb-4 text-neutral-300">
            <a className="font-semibold text-green-200 underline hover:text-green-400 transition-colors" target="_blank">Cloud Captain</a> at <a href="https://www.linkedin.com/posts/roshnikumari1_awscloudclubcaptain-leadershipjourney-cloudcommunity-activity-7323594091886247936-0AFK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2q3HQBOr_xod9RxrrQEc5TmW2iDNpwlLU" className="font-semibold hover:text-green-400 transition-colors" target="_blank">AWS</a>, <a className="font-semibold text-green-200 hover:text-green-400 transition-colors" target="_blank">Business Fellow</a> at <a href="https://fellowship.perplexity.ai/home" className="font-semibold hover:text-green-400 transition-colors" target="_blank">Perplexity</a>, 3X <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=D00A30F85F363C8E81C269EB563AA56FC4A423408ECEE9549965759C28D989BD" className="font-semibold hover:text-green-400 transition-colors" target="_blank">@OCFA Certified</a>, <a href="https://www.ieee.org/" className="font-semibold hover:text-green-400 transition-colors" target="_blank">IEEE GU</a>, <a className="font-semibold hover:text-green-400 transition-colors" target="_blank">Fellow</a> at <a href="https://www.linkedin.com/posts/roshnikumari1_world-bank-group-activity-7308677984469622784-2yTb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2q3HQBOr_xod9RxrrQEc5TmW2iDNpwlLU" className="font-semibold hover:text-green-400 transition-colors" target="_blank">World Bank</a>, <a href="https://www.linkedin.com/posts/roshnikumari1_takeastepforward-forwardprogram-mckinseyorg-activity-7315394369514049536-mpou?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2q3HQBOr_xod9RxrrQEc5TmW2iDNpwlLU" className="font-semibold underline hover:text-green-400 transition-colors" target="_blank">@McKinsey Forward</a>, <a className="font-semibold hover:text-green-400 transition-colors" target="_blank">Flipkart Runner'24</a>, <a className="font-semibold hover:text-green-400 transition-colors" target="_blank">Member</a> at <a href="https://earn.superteam.fun/t/roshni-lively-5/" className="font-semibold hover:text-green-400 transition-colors" target="_blank">Superteam</a>, <a className="font-semibold hover:text-green-400 transition-colors" target="_blank">Fellow</a> at <a href="https://www.linkedin.com/posts/roshnikumari1_aspire-institute-leaders-program-activity-7318824363934265344-D2Lo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2q3HQBOr_xod9RxrrQEc5TmW2iDNpwlLU" className="font-semibold hover:text-green-400 transition-colors" target="_blank">Aspire Institute</a>, <a href="https://example.com/mlsa" className="font-semibold underline hover:text-green-400 transition-colors" target="_blank">β MLSA</a>, <a href="https://example.com/aws-scholar" className="font-semibold underline hover:text-green-400 transition-colors" target="_blank">AWS AL/ML Scholar'24</a>, and <a className="font-semibold hover:text-green-400 transition-colors" target="_blank">Ambassador</a> at <a href="https://example.com/iisc" className="font-semibold hover:text-green-400 transition-colors" target="_blank">STEM @IISc Bangalore</a>.<br/>
            <span className="block mt-2">I thrive on building communities, driving innovation, and empowering others through impactful tech and leadership roles.</span>
          </p>
          <a
            href="https://calendly.com/roshni06k2004/30min"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400 border-[1px] px-3 py-1.5 rounded-lg text-green-200 font-light text-sm shadow-sm hover:bg-green-500/10 hover:text-white active:scale-95 transition-all duration-100 mb-4"
          >
            <span role="img" aria-label="calendar">📅</span> book a meet
          </a>
          <div className="mb-4">
            <span className="text-neutral-400 text-sm">generally i be with:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "next.js",
                "aws",
                "solana",
                "typescript",
                "javascript",
                "reactjs",
                "gcp",
                "ai/ml",
                "gen ai",
                "rust",
                "web3+web2",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 px-3 py-1 rounded text-xs cursor-pointer transition-all duration-150 hover:bg-green-700/30 hover:text-green-200 active:scale-95 border border-transparent hover:border-green-400"
                  tabIndex={0}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2 text-neutral-400 text-sm font-semibold">recent achievements / experiences:</div>
          <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1 mb-4">
            <li>Google Hackathons: Participated in Girl Hackathon 2024 & Generative AI Hackathon (AI-driven solutions).</li>
            <li>AWS AI/ML Scholar 2024: Exclusive intern, Top 9 in India (EdTech), mentored by global experts.</li>
            <li>College Hackathon Winner: Won ₹21,000 for Smart Gas Leakage Detection Model.</li>
            <li>Asian School of Business Hackathon: Finalist in Noida.</li>
            <li>PAN India Hackathon: 1st place, recognized for innovation under pressure.</li>
            <li>GFG Hackathon: Top 5% in algorithms and programming.</li>
            <li>Adobe GenAI Hackathon: Applied GenAI to real-world challenges.</li>
            <li>Snowflake & Gentech India Hackathons: Advanced to Round 2 (AI-focused, hosted by Thales).</li>
            <li>4 US-based hackathon finals: Demonstrated strong problem-solving and coding skills.</li>
            <li>Invited for research collaborations by two companies.</li>
            <li>1st position in a PAN India competition for an innovative project.</li>
          </ul>
        </div>
        <div className="shrink-0 flex justify-center items-center w-[160px] h-[160px]">
          <Image
            src="/roshu.jpg"
            alt="Profile photo"
            className="rounded-full border border-white shadow-lg object-cover"
            width={160}
            height={160}
            priority
          />
        </div>
      </div>
    </section>
  );
}
