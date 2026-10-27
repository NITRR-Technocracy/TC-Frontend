import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CaseOps.module.css";

// Page-specific assets
import heroGraphic from "../assets/case-ops/hero-graphic.svg";
import caseTrackIcon from "../assets/case-ops/case-track.svg";
import productTrackIcon from "../assets/case-ops/product-track.svg";
import screeningIcon from "../assets/case-ops/screening.svg";
import proposalIcon from "../assets/case-ops/proposal.svg";
import developmentIcon from "../assets/case-ops/development.svg";
import finaleIcon from "../assets/case-ops/finale.svg";
import ipShieldIcon from "../assets/case-ops/ip-shield.svg";
import dataLockIcon from "../assets/case-ops/data-lock.svg";
import openStandardsIcon from "../assets/case-ops/open-standards.svg";
import impartialJuryIcon from "../assets/case-ops/impartial-jury.svg";
import disclaimerIcon from "../assets/case-ops/disclaimer-icon.svg";

// Authentic event photography
import teamCollabPhoto from "../assets/case-ops/team-collaboration.webp";
import juryDefensePhoto from "../assets/case-ops/jury-defense.webp";
import prototypePhoto from "../assets/case-ops/prototype-showcase.webp";
import campusPhoto from "../assets/case-ops/campus-inauguration.webp";

const CaseOps = () => {
  const [activeMatrixTrack, setActiveMatrixTrack] = useState("strategy");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    window.scrollTo(0, 0);

    // Enforce normal native cursor and scoped page style
    document.body.classList.add("normal-cursor");
    document.body.classList.add("caseops-page");
    return () => {
      document.body.classList.remove("normal-cursor");
      document.body.classList.remove("caseops-page");
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.caseOpsContainer}>
      <div className={styles.contentWrapper}>
        {/* Tentative Status Advisory */}
        <aside className={styles.noticeBanner} aria-label="Competition Status Notice" data-aos="fade-down">
          <div className={styles.noticeLeft}>
            <p className={styles.noticeText}>
              <strong>2027 Planning Phase:</strong> Proposed Framework &mdash; CASE OPS 2027 format &amp; tracks are indicative. Final schedules and problem briefs will be announced on Unstop.
            </p>
          </div>
        </aside>

        {/* Section 1: Hero */}
        <section className={styles.heroSection} aria-labelledby="hero-heading">
          <div className={styles.heroContent} data-aos="fade-right">
            <h1 id="hero-heading" className={styles.heroTitle}>
              CASE OPS 2027
            </h1>

            <p className={styles.heroInstitution}>
              Organized by Team Technocracy at NIT Raipur
            </p>

            <p className={styles.heroTagline}>
              Where analytical strategy meets practical execution.
            </p>

            <p className={styles.heroSubtitle}>
              A premier collegiate problem-solving competition. Undergraduate teams tackle authentic enterprise challenges through strategic consulting or technical prototyping.
            </p>

            {/* Quick Facts Grid */}
            <div className={styles.quickFactsGrid}>
              <div className={styles.factCell}>
                <span className={styles.factLabel}>Platform</span>
                <span className={styles.factValue}>Unstop</span>
              </div>
              <div className={styles.factCell}>
                <span className={styles.factLabel}>Tracks</span>
                <span className={styles.factValue}>2 Distinct Tracks</span>
              </div>
              <div className={styles.factCell}>
                <span className={styles.factLabel}>Target</span>
                <span className={styles.factValue}>Undergraduate Students</span>
              </div>
              <div className={styles.factCell}>
                <span className={styles.factLabel}>Culmination</span>
                <span className={styles.factValue}>NIT Raipur Campus</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => scrollToSection("tracks")}
                aria-label="Explore planned competition tracks"
              >
                Explore Planned Tracks
                <span className={styles.btnArrow} aria-hidden="true">↓</span>
              </button>
              <button
                type="button"
                className={styles.secondaryBtn}
                onClick={() => scrollToSection("rounds")}
                aria-label="View proposed round structure"
              >
                Proposed Round Structure
              </button>
              <button
                type="button"
                className={styles.tertiaryBtn}
                onClick={() => scrollToSection("guidelines")}
                aria-label="Review evaluation criteria and competition rules"
              >
                Evaluation &amp; Rules
              </button>
            </div>
          </div>

          <div className={styles.heroVisual} data-aos="fade-left">
            <div className={styles.matrixCard} data-ui="case-matrix">
              <div className={styles.matrixTopBar}>
                <span className={styles.matrixTitle}>Case Architecture Schematic</span>
                <div className={styles.matrixTabGroup} role="tablist" aria-label="Track Preview Selector">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeMatrixTrack === "strategy"}
                    className={`${styles.matrixTab} ${activeMatrixTrack === "strategy" ? styles.matrixTabActive : ""}`}
                    onClick={() => setActiveMatrixTrack("strategy")}
                  >
                    Strategy Track
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeMatrixTrack === "product"}
                    className={`${styles.matrixTab} ${activeMatrixTrack === "product" ? styles.matrixTabActive : ""}`}
                    onClick={() => setActiveMatrixTrack("product")}
                  >
                    Systems Track
                  </button>
                </div>
              </div>

              <div className={styles.matrixBody}>
                <img
                  src={heroGraphic}
                  alt="Case Ops 2027 Dual-Track Architecture Diagram illustrating Strategy and Systems convergence"
                  className={styles.heroGraphicImg}
                  width="640"
                  height="420"
                />

                <div className={styles.matrixLiveSummary} aria-live="polite">
                  {activeMatrixTrack === "strategy" ? (
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryBadge}>Track 1 Focus</span>
                      <p className={styles.summaryText}>
                        Business analytics, root-cause diagnosis, financial modeling, and executive pitch deck defense.
                      </p>
                    </div>
                  ) : (
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryBadge}>Track 2 Focus</span>
                      <p className={styles.summaryText}>
                        System architecture, UX wireframes, rapid prototyping, and live software demo defense.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What Is Case-Ops? */}
        <section id="about" className={styles.overviewSection} aria-labelledby="about-heading">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 id="about-heading" className={styles.sectionTitle}>What is Case-Ops?</h2>
            <p className={styles.sectionDescription}>
              Bridging academia and enterprise through rigorous, real-world analytical problem solving.
            </p>
          </div>

          <div className={styles.editorialGrid} data-aos="fade-up">
            <div className={styles.editorialLeadBlock}>
              <p className={styles.editorialLeadText}>
                Case-Ops bridges academia and industry by tasking student teams with authentic, company-defined problem statements. Rather than theoretical simulations, participants dissect real organizational bottlenecks and deliver actionable solutions.
              </p>
              <div className={styles.leadImageWrap}>
                <img
                  src={teamCollabPhoto}
                  alt="Student problem-solving teams actively reviewing case data and strategic briefs at NIT Raipur"
                  className={styles.editorialLeadPhoto}
                  width="600"
                  height="360"
                  loading="lazy"
                />
              </div>
              <p className={styles.editorialMetaNote}>
                Designed to test research rigor, strategic viability, and technical execution under realistic constraints.
              </p>
            </div>

            <div className={styles.editorialPillarsList}>
              <article className={styles.pillarItem}>
                <div className={styles.pillarHeader}>
                  <img src={caseTrackIcon} alt="" className={styles.pillarIcon} aria-hidden="true" width="36" height="36" />
                  <h3 className={styles.pillarTitle}>Real-World Impact</h3>
                </div>
                <p className={styles.pillarText}>
                  Direct problem statements sourced from active companies, exposing participants to authentic market and operational challenges.
                </p>
              </article>

              <article className={styles.pillarItem}>
                <div className={styles.pillarHeader}>
                  <img src={productTrackIcon} alt="" className={styles.pillarIcon} aria-hidden="true" width="36" height="36" />
                  <h3 className={styles.pillarTitle}>Two Specialized Paths</h3>
                </div>
                <p className={styles.pillarText}>
                  Dedicated tracks for analytical consulting and technical prototyping, converging at the grand on-campus defense.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 3: Planned Tracks */}
        <section id="tracks" className={styles.tracksSection} aria-labelledby="tracks-heading">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 id="tracks-heading" className={styles.sectionTitle}>Two Planned Tracks for 2027</h2>
            <p className={styles.sectionDescription}>
              Select your path based on your core strengths—strategic business formulation or technical product engineering.
            </p>
          </div>

          <div className={styles.tracksGrid}>
            {/* Track 1: Case Competition */}
            <article className={styles.trackCard} data-aos="fade-up">
              <div className={styles.trackImageBanner}>
                <img
                  src={juryDefensePhoto}
                  alt="Student team presenting executive business strategy deck during competition jury defense"
                  className={`${styles.trackHeaderPhoto} ${styles.caseTrackHeaderPhoto}`}
                  width="560"
                  height="260"
                  loading="lazy"
                />
              </div>

              <div className={styles.trackContentWrap}>
                <div className={styles.trackTopHeader}>
                  <span className={styles.trackIdTag}>Track 1</span>
                  <span className={styles.trackStateTag}>Proposed</span>
                </div>

                <div className={styles.trackHeadingWrap}>
                  <img src={caseTrackIcon} alt="" className={styles.trackVectorIcon} aria-hidden="true" width="40" height="40" />
                  <h3 className={styles.trackName}>Case Competition Track</h3>
                </div>

                <p className={styles.trackDescription}>
                  Focuses on structured business analysis, root-cause diagnosis, feasibility evaluation, and strategic roadmaps for enterprise-level challenges.
                </p>

                <ul className={styles.trackDeliverablesList} aria-label="Core Track Deliverables">
                  <li className={styles.trackDeliverable}>Problem Definition</li>
                  <li className={styles.trackDeliverable}>Market &amp; Financial Modeling</li>
                  <li className={styles.trackDeliverable}>Feasibility &amp; ROI</li>
                  <li className={styles.trackDeliverable}>Executive Pitch Deck</li>
                </ul>

                <div className={styles.trackAudienceStrip}>
                  <span className={styles.audiencePrefix}>Best for:</span> Consulting, Business Analytics &amp; Product Strategy
                </div>
              </div>
            </article>

            {/* Track 2: Product Development */}
            <article className={styles.trackCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.trackImageBanner}>
                <img
                  src={prototypePhoto}
                  alt="Engineering team exhibiting digital prototype software and architecture specifications"
                  className={`${styles.trackHeaderPhoto} ${styles.prototypeHeaderPhoto}`}
                  width="560"
                  height="260"
                  loading="lazy"
                />
              </div>

              <div className={styles.trackContentWrap}>
                <div className={styles.trackTopHeader}>
                  <span className={styles.trackIdTag}>Track 2</span>
                  <span className={styles.trackStateTag}>Proposed</span>
                </div>

                <div className={styles.trackHeadingWrap}>
                  <img src={productTrackIcon} alt="" className={styles.trackVectorIcon} aria-hidden="true" width="40" height="40" />
                  <h3 className={styles.trackName}>Product Development Track</h3>
                </div>

                <p className={styles.trackDescription}>
                  Focuses on translating corporate problem statements into practical digital products, architecting functional prototypes, and validating core technical features.
                </p>

                <ul className={styles.trackDeliverablesList} aria-label="Core Track Deliverables">
                  <li className={styles.trackDeliverable}>System Architecture</li>
                  <li className={styles.trackDeliverable}>UI/UX Wireframes</li>
                  <li className={styles.trackDeliverable}>Functional Prototype / POC</li>
                  <li className={styles.trackDeliverable}>Live Demo Defense</li>
                </ul>

                <div className={styles.trackAudienceStrip}>
                  <span className={styles.audiencePrefix}>Best for:</span> Software Engineers, System Architects &amp; UI/UX Designers
                </div>
              </div>
            </article>
          </div>

          <aside className={styles.crossTrackCallout} data-aos="fade-up">
            <span className={styles.crossTrackIcon} aria-hidden="true">⇄</span>
            <p className={styles.crossTrackText}>
              <strong>Cross-Track Availability:</strong> Depending on partner objectives, select problem briefs may be approached via strategic business consulting or technical software implementation.
            </p>
          </aside>
        </section>

        {/* Section 4: Proposed Event Rounds */}
        <section id="rounds" className={styles.roundsSection} aria-labelledby="rounds-heading">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 id="rounds-heading" className={styles.sectionTitle}>Proposed Round Structure</h2>
            <p className={styles.sectionDescription}>
              An indicative four-phase workflow designed to test analytical foundation, concept design, solution build, and live jury defense.
            </p>
          </div>

          <div className={styles.pipelineFlow}>
            {/* Phase Group A: Qualification & Proposal */}
            <div className={styles.qualificationPhaseRow}>
              {/* Round 1 */}
              <article className={styles.roundStepCard} data-aos="fade-up">
                <div className={styles.roundTopMeta}>
                  <span className={styles.roundNumber}>ROUND 1</span>
                  <span className={styles.roundStageTag}>Online • Unstop</span>
                </div>
                <div className={styles.roundTitleRow}>
                  <img src={screeningIcon} alt="" className={styles.roundIcon} aria-hidden="true" width="30" height="30" />
                  <h3 className={styles.roundTitle}>Aptitude &amp; Screening</h3>
                </div>
                <p className={styles.roundDesc}>
                  Preliminary assessment testing analytical reasoning, quantitative aptitude, and core problem-solving logic.
                </p>
                <div className={styles.roundShortlistPill}>
                  Shortlist ~100 Teams
                </div>
              </article>

              {/* Round 2 */}
              <article className={styles.roundStepCard} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.roundTopMeta}>
                  <span className={styles.roundNumber}>ROUND 2</span>
                  <span className={styles.roundStageTag}>PPT Submission</span>
                </div>
                <div className={styles.roundTitleRow}>
                  <img src={proposalIcon} alt="" className={styles.roundIcon} aria-hidden="true" width="30" height="30" />
                  <h3 className={styles.roundTitle}>Problem Selection &amp; Proposal</h3>
                </div>
                <p className={styles.roundDesc}>
                  Shortlisted teams select an industry brief and submit a structured concept proposal and execution approach.
                </p>
                <div className={styles.roundShortlistPill}>
                  Shortlist ~50 Teams
                </div>
              </article>
            </div>

            {/* Phase Group B: Sprint & Finale */}
            <div className={styles.culminationPhaseRow}>
              {/* Round 3: Industry Collaboration Sprint */}
              <article className={styles.sprintCard} data-aos="fade-up" data-aos-delay="150">
                <div className={styles.roundTopMeta}>
                  <span className={styles.roundNumber}>ROUND 3</span>
                  <span className={styles.roundStageTag}>~3-Week Sprint</span>
                </div>
                <div className={styles.roundTitleRow}>
                  <img src={developmentIcon} alt="" className={styles.roundIcon} aria-hidden="true" width="30" height="30" />
                  <h3 className={styles.roundTitle}>Industry Collaboration</h3>
                </div>
                <p className={styles.roundDesc}>
                  Intensive development phase refining business models or building prototypes with periodic mentor check-ins.
                </p>
                <div className={styles.roundShortlistPill}>
                  Mentorship &amp; Feedback
                </div>
              </article>

              {/* Round 4: Grand Finale at NIT Raipur */}
              <article className={styles.finaleHighlightCard} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.finaleImageContainer}>
                  <img
                    src={campusPhoto}
                    alt="NIT Raipur campus ceremonial stage and leadership presentation"
                    className={styles.finaleCampusPhoto}
                    width="560"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <div className={styles.finaleContent}>
                  <div className={styles.roundTopMeta}>
                    <span className={styles.roundNumberHighlight}>ROUND 4</span>
                    <span className={styles.roundStageTagGold}>NIT Raipur Campus</span>
                  </div>
                  <div className={styles.roundTitleRow}>
                    <img src={finaleIcon} alt="" className={styles.roundIcon} aria-hidden="true" width="30" height="30" />
                    <h3 className={styles.roundTitle}>Grand Finale Presentation</h3>
                  </div>
                  <p className={styles.roundDesc}>
                    Selected finalists present their finished strategy or functional prototype live before an executive jury panel.
                  </p>
                  <div className={styles.roundShortlistPillHighlight}>
                    Live Defense &amp; Awards
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Section 5: Rules & Evaluation */}
        <section id="guidelines" className={styles.rulesSection} aria-labelledby="guidelines-heading">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 id="guidelines-heading" className={styles.sectionTitle}>Evaluation &amp; Guidelines</h2>
            <p className={styles.sectionDescription}>
              Scoring is tailored to each track’s focus, underpinned by strict intellectual property protection and transparent standards.
            </p>
          </div>

          <div className={styles.rulesGrid}>
            {/* Left: Essential Safeguards */}
            <div className={styles.safeguardsCol} data-aos="fade-right">
              <h3 className={styles.colSectionHeading}>Core Guidelines &amp; Safeguards</h3>

              <div className={styles.safeguardsTierList}>
                {/* Safeguard Tier 1: Rights & Privacy */}
                <div className={styles.safeguardTier}>
                  <div className={styles.safeguardItem}>
                    <img src={ipShieldIcon} alt="" className={styles.safeguardIcon} aria-hidden="true" width="24" height="24" />
                    <div className={styles.safeguardText}>
                      <h4 className={styles.safeguardTitle}>Intellectual Property Protection</h4>
                      <p className={styles.safeguardDesc}>
                        Participation alone does not transfer ownership or commercial-use rights. All submissions remain the intellectual property of participants.
                      </p>
                    </div>
                  </div>

                  <div className={styles.safeguardItem}>
                    <img src={dataLockIcon} alt="" className={styles.safeguardIcon} aria-hidden="true" width="24" height="24" />
                    <div className={styles.safeguardText}>
                      <h4 className={styles.safeguardTitle}>Confidentiality &amp; Data Security</h4>
                      <p className={styles.safeguardDesc}>
                        Public problem statements will never include confidential, proprietary, or sensitive internal data.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Safeguard Tier 2: Standards & Impartiality */}
                <div className={styles.safeguardTier}>
                  <div className={styles.safeguardItem}>
                    <img src={openStandardsIcon} alt="" className={styles.safeguardIcon} aria-hidden="true" width="24" height="24" />
                    <div className={styles.safeguardText}>
                      <h4 className={styles.safeguardTitle}>Open Source Compliance</h4>
                      <p className={styles.safeguardDesc}>
                        Teams must strictly adhere to open-source licenses, API terms of service, and ethical computing standards.
                      </p>
                    </div>
                  </div>

                  <div className={styles.safeguardItem}>
                    <img src={impartialJuryIcon} alt="" className={styles.safeguardIcon} aria-hidden="true" width="24" height="24" />
                    <div className={styles.safeguardText}>
                      <h4 className={styles.safeguardTitle}>Impartial Evaluation</h4>
                      <p className={styles.safeguardDesc}>
                        Weighted rubrics totaling 100% are published prior to judging. Evaluators disclose conflicts of interest, and sponsorship does not influence scores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Track Evaluation Rubric */}
            <div className={styles.rubricCol} data-aos="fade-left">
              <h3 className={styles.colSectionHeading}>Track-Specific Evaluation Rubric</h3>

              <div className={styles.rubricTablesWrap} data-ui="rubric-matrix">
                {/* Case Track Rubric */}
                <div className={styles.rubricCard}>
                  <div className={styles.rubricHeaderRow}>
                    <span className={styles.rubricTrackTitle}>Case Competition Track</span>
                    <span className={styles.rubricTrackTag}>Analytical Rubric</span>
                  </div>
                  <dl className={styles.rubricTable}>
                    <div className={styles.rubricEntry}>
                      <dt className={styles.rubricCriteria}>Problem Understanding &amp; Context</dt>
                      <dd className={styles.rubricDetail}>Root-cause analysis, business constraints &amp; research depth</dd>
                    </div>
                    <div className={styles.rubricEntry}>
                      <dt className={styles.rubricCriteria}>Recommendation Quality &amp; Roadmap</dt>
                      <dd className={styles.rubricDetail}>Feasibility, financial rationale &amp; implementation clarity</dd>
                    </div>
                  </dl>
                </div>

                {/* Product Track Rubric */}
                <div className={styles.rubricCard}>
                  <div className={styles.rubricHeaderRow}>
                    <span className={styles.rubricTrackTitle}>Product Development Track</span>
                    <span className={styles.rubricTrackTag}>Engineering Rubric</span>
                  </div>
                  <dl className={styles.rubricTable}>
                    <div className={styles.rubricEntry}>
                      <dt className={styles.rubricCriteria}>Technical Design &amp; Architecture</dt>
                      <dd className={styles.rubricDetail}>System architecture, UX fidelity &amp; requirement alignment</dd>
                    </div>
                    <div className={styles.rubricEntry}>
                      <dt className={styles.rubricCriteria}>Functionality &amp; Demonstration</dt>
                      <dd className={styles.rubricDetail}>Prototype completeness, testing stability &amp; live demo</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Tentative Timeline */}
        <section id="timeline" className={styles.timelineSection} aria-labelledby="timeline-heading">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 id="timeline-heading" className={styles.sectionTitle}>Tentative Timeline</h2>
            <p className={styles.sectionDescription}>
              Key milestones in sequential order. Exact schedules will be confirmed upon the official portal launch.
            </p>
          </div>

          <div className={styles.timelineContainer} data-aos="fade-up">
            <div className={styles.timelineScheduleList}>
              <div className={styles.timelineRow}>
                <div className={styles.timelinePhaseTag}>Initial Phase</div>
                <div className={styles.timelineRowBody}>
                  <h3 className={styles.timelineTitle}>Portal Registration &amp; Aptitude Screening</h3>
                  <p className={styles.timelineText}>Unstop launch and online analytical qualification.</p>
                </div>
              </div>

              <div className={styles.timelineRow}>
                <div className={styles.timelinePhaseTag}>Stage 2</div>
                <div className={styles.timelineRowBody}>
                  <h3 className={styles.timelineTitle}>Problem Release &amp; Proposal Submission</h3>
                  <p className={styles.timelineText}>Brief selection and structured deck submission.</p>
                </div>
              </div>

              <div className={styles.timelineRow}>
                <div className={styles.timelinePhaseTag}>Indicatively 3 Weeks</div>
                <div className={styles.timelineRowBody}>
                  <h3 className={styles.timelineTitle}>Industry Collaboration &amp; Development</h3>
                  <p className={styles.timelineText}>Solution build, scope iteration, and mentor checkpoints.</p>
                </div>
              </div>

              <div className={styles.timelineRowFinale}>
                <div className={styles.timelinePhaseTagGold}>Culmination</div>
                <div className={styles.timelineRowBody}>
                  <h3 className={styles.timelineTitle}>Grand Finale at NIT Raipur</h3>
                  <p className={styles.timelineText}>On-campus jury defense and winner declarations.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.timelineDisclaimer} data-aos="fade-up">
            <img src={disclaimerIcon} alt="" className={styles.disclaimerIcon} aria-hidden="true" width="20" height="20" />
            <p className={styles.disclaimerText}>
              Exact dates, registration launch, and submission deadlines will be officially announced on the Unstop portal upon organizer confirmation.
            </p>
          </aside>
        </section>

        {/* Section 7: Event Dossier Bridge & Navigation */}
        <nav className={styles.eventNavBridge} aria-label="Event Section Navigation" data-aos="fade-up">
          <div className={styles.bridgeInfoBlock}>
            <span className={styles.bridgeEventLabel}>Event Dossier</span>
            <span className={styles.bridgeTitle}>CASE OPS 2027</span>
            <span className={styles.bridgeOrganiser}>Team Technocracy • NIT Raipur</span>
          </div>

          <div className={styles.bridgeNavActions}>
            <button
              type="button"
              className={styles.bridgeLinkBtn}
              onClick={() => scrollToSection("about")}
              aria-label="Scroll to What is Case-Ops section"
            >
              About
            </button>
            <button
              type="button"
              className={styles.bridgeLinkBtn}
              onClick={() => scrollToSection("tracks")}
              aria-label="Scroll to Planned Tracks section"
            >
              Tracks
            </button>
            <button
              type="button"
              className={styles.bridgeLinkBtn}
              onClick={() => scrollToSection("rounds")}
              aria-label="Scroll to Round Structure section"
            >
              Rounds
            </button>
            <button
              type="button"
              className={styles.bridgeLinkBtn}
              onClick={() => scrollToSection("guidelines")}
              aria-label="Scroll to Evaluation Guidelines section"
            >
              Rules
            </button>
            <button
              type="button"
              className={styles.bridgeLinkBtn}
              onClick={() => scrollToSection("timeline")}
              aria-label="Scroll to Tentative Timeline section"
            >
              Timeline
            </button>
            <button
              type="button"
              className={styles.bridgeTopBtn}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll back to top of the page"
            >
              Back to Top ↑
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default CaseOps;
