import { Calendar, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  // Only one blog post for now
  if (slug !== "storage-ai-infra") {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Storage is the invisible opportunity in AI infra
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <time dateTime="2025-01-15">Jan 15, 2025</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>AI and GenAI are the primary drivers of cloud adoption, with over half of organizations citing them as the top reason to move workloads.</li>
              <li>Cloud storage demand is accelerating at ~20% CAGR as enterprises need to manage massive AI datasets, checkpoints, and inference data.</li>
              <li>BFSI, Manufacturing, Retail, and Healthcare are the leading industries adopting AI cloud storage, with the USA dominating global share.</li>
              <li>Customers prioritize cost efficiency, scalable data management, and strong security, while also demanding fast performance and AI-native integrations.</li>
              <li>AWS remains the dominant provider for AI cloud storage, while Azure, GCP, and Oracle are gaining ground, and challengers like Wasabi and Backblaze are emerging.</li>
              <li>Enterprises struggle with unpredictable costs, expensive egress fees, inefficient checkpointing, and multi-cloud migration difficulties.</li>
              <li>Storage optimization across ingest, training, checkpointing, and inference is critical to reducing GPU idle time and overall AI infrastructure cost.</li>
              <li>Optimized storage solutions for AI include multi-cloud ingestion, file-based distributed caches for training, and autonomous checkpointing tailored to model needs.</li>
              <li>Differentiation in this market comes from lowering TCO, eliminating cross-cloud fees, offering autonomous lifecycle management, and ensuring transparent pricing.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How are cloud storage services evolving?</h2>
            <p className="mb-4 text-lg">AI workload is driving the necessity for cloud storage services:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                <strong>Cloud demands are rising</strong>
                <ul className="mt-2 space-y-2 list-circle pl-6">
                  <li>54% organizations cite AI/GenAI as the primary driver for cloud adoption</li>
                </ul>
              </li>
              <li>
                <strong>Increasingly, cloud investment decisions are being made to support AI</strong>
                <ul className="mt-2 space-y-2 list-circle pl-6">
                  <li>&gt;80% Companies want to move their AI app and infra to cloud</li>
                  <li>GenAI-specific cloud services saw growth of 140-180 percent in Q2 2025</li>
                </ul>
              </li>
              <li>
                <strong>Cloud Storage (growing at ~20% CAGR) benefits the most from AI-driven cloud adoption</strong>
                <ul className="mt-2 space-y-2 list-circle pl-6">
                  <li>Storage spending in AI infrastructure has been driven by the need to manage large datasets required for training AI models, as well as storage of training, checkpoints and repositories of data for inference phases.</li>
                </ul>
              </li>
            </ul>
            <div className="bg-card border-neo border-foreground p-6 rounded my-8">
              <p className="text-lg font-bold">💡 Cloud adoption is accelerating because of AI workloads, with storage as the main area of focus.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What does AI workload storage entail?</h2>
            <p className="mb-4 text-lg">Storage for AI workload</p>
            <ul className="space-y-3 list-disc pl-6 mb-6">
              <li>Storage needs vary at each stage of the AI pipeline and can have their own impact</li>
              <li>Storage characteristics are defined such that they improve AI workload performance and optimize direct (storage cost) and indirect cost (GPU/compute cost)</li>
            </ul>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-neo border-foreground">
                <thead>
                  <tr className="bg-card">
                    <th className="border-2 border-foreground p-4 text-left font-bold">Stage</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Characteristics</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-foreground p-4">Data Preparation</td>
                    <td className="border-2 border-foreground p-4">
                      • Scalable storage<br/>
                      • High write throughput
                    </td>
                    <td className="border-2 border-foreground p-4">
                      • Model accuracy<br/>
                      • Model freshness
                    </td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border-2 border-foreground p-4">Training</td>
                    <td className="border-2 border-foreground p-4">
                      • Low IOPS (storage I/O)<br/>
                      • Low write/read throughput
                    </td>
                    <td className="border-2 border-foreground p-4">
                      • Training time (GPU utilization)<br/>
                      • Checkpointing time (GPU utilization)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-foreground p-4">Inference</td>
                    <td className="border-2 border-foreground p-4">
                      • Low read time (model I/O)<br/>
                      • Scalable storage (model parameters)
                    </td>
                    <td className="border-2 border-foreground p-4">
                      • Response time<br/>
                      • Retraining, archival, compliance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4 text-lg font-bold">Other Cloud stack requirements</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Security and governance: Compliance, Access, Encryption</li>
              <li>Data management: Manage scale/performance requirements, storage intelligence, Observability, Lifecycle management</li>
              <li>Ecosystem: Integrations, frameworks</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Who is the target segment?</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>By Industry</strong>: BFSI, Manufacturing, Retail, Healthcare = highest AI-cloud adoption.</li>
              <li><strong>By Geography</strong>: USA leads (59%), followed by PRC (20%); APJ (13%) and EU (7%).</li>
              <li><strong>By level of cloud adoption</strong>: ~50% enterprises are still in the experimentation phase for implementing AI/ML on cloud</li>
              <li><strong>By Level of AI adoption</strong>: Most companies are in the scaling or experimentation phase of AI adoption. Among enterprises adopting AI, those with lower AI maturity are mostly still planning or experimenting with cloud services. Those with higher level of AI maturity have already deployed to the cloud</li>
            </ul>
            <div className="bg-card border-neo border-foreground p-6 rounded my-8">
              <p className="text-lg font-bold">💡 Cloud-mature enterprises in the scaling or production stage of AI development are the prime target segment.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What do the customers want?</h2>
            <p className="mb-6 text-lg">Key consideration criteria for customers evaluating cloud for AI workloads</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-neo border-foreground">
                <thead>
                  <tr className="bg-card">
                    <th className="border-2 border-foreground p-4 text-left font-bold">Reason</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Mentions</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Key Insights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-foreground p-4"><strong>Cost/Pricing Concerns</strong></td>
                    <td className="border-2 border-foreground p-4">66%</td>
                    <td className="border-2 border-foreground p-4">Budget optimization is crucial, especially for long-term data retention</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border-2 border-foreground p-4">Data management</td>
                    <td className="border-2 border-foreground p-4">62%</td>
                    <td className="border-2 border-foreground p-4">Users need scalable storage for large datasets, models, and training data</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-foreground p-4"><strong>Security/Privacy Considerations</strong></td>
                    <td className="border-2 border-foreground p-4">61%</td>
                    <td className="border-2 border-foreground p-4">Data protection, compliance, and privacy are paramount for AI data</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border-2 border-foreground p-4"><strong>Performance/Speed Requirements</strong></td>
                    <td className="border-2 border-foreground p-4">57%</td>
                    <td className="border-2 border-foreground p-4">Fast data access for training and inference operations</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-foreground p-4"><strong>Integration Capabilities</strong></td>
                    <td className="border-2 border-foreground p-4">47%</td>
                    <td className="border-2 border-foreground p-4">Seamless integration with AI/ML frameworks and tools</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-card border-neo border-foreground p-6 rounded my-8">
              <p className="text-lg font-bold">💡 Cost, scalability, and security dominate; customers also want AI-native features.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What do the customers currently use?</h2>
            <ul className="space-y-3 list-disc pl-6 mb-6">
              <li><strong>Deployment mix</strong>: 38% cloud compute, 33% on-prem, 29% hybrid.</li>
              <li><strong>Hyperscalers lead</strong>: AWS &gt; Azure &gt; GCP.</li>
              <li>Azure &amp; GCP are gaining due to stronger AI models/partnerships.</li>
              <li><strong>Challengers</strong>: Wasabi, Cloudflare R2, Backblaze B2.</li>
            </ul>
            <p className="mb-6 text-lg">Key providers considered for AI cloud storage needs</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-neo border-foreground">
                <thead>
                  <tr className="bg-card">
                    <th className="border-2 border-foreground p-4 text-left font-bold">Provider</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Mentions</th>
                    <th className="border-2 border-foreground p-4 text-left font-bold">Market Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-foreground p-4"><strong>AWS/Amazon S3</strong></td>
                    <td className="border-2 border-foreground p-4">45%</td>
                    <td className="border-2 border-foreground p-4">Dominant player with extensive AI/ML integrations</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border-2 border-foreground p-4">Oracle</td>
                    <td className="border-2 border-foreground p-4">16%</td>
                    <td className="border-2 border-foreground p-4">Growing presence in enterprise AI workloads</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-foreground p-4"><strong>Google Cloud Platform</strong></td>
                    <td className="border-2 border-foreground p-4">11%</td>
                    <td className="border-2 border-foreground p-4">Strong AI/ML ecosystem with TensorFlow integration</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border-2 border-foreground p-4"><strong>Microsoft Azure</strong></td>
                    <td className="border-2 border-foreground p-4">9%</td>
                    <td className="border-2 border-foreground p-4">Popular for enterprise AI applications</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-foreground p-4">Other</td>
                    <td className="border-2 border-foreground p-4">19%</td>
                    <td className="border-2 border-foreground p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What problems do customers face?</h2>
            <p className="mb-6 text-lg">AI workloads require optimized storage solutions across all key stages of training routine</p>
            <p className="mb-4 text-lg font-bold">Key problems associated with storage during AI training</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Preprocessing can consume significant power and resources that can potentially burden the overloaded training routines.</li>
              <li>Checkpointing is critical during training and is directly related to storage efficiency. Optimizing the checkpointing method and frequency while considering overheads is necessary to reduce GPU idling.</li>
              <li>Multi-cloud is growing. Orgs use different CSPs for different datasets - this makes data migration difficult and costly (due to egress/exit fees) from CSPs</li>
              <li>Customers increasingly want to access archive/backup data for AI training and advanced analytics - accessing this is inefficient and expensive</li>
              <li>Security and protection are compromised for cost savings.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
