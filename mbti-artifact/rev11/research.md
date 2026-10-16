# Research notes for the Thai cognitive-function self-reflection quiz (checked 2026-10-16)

How each source was checked:
- **[FULL]**: I opened and read the full text.
- **[PAGE]**: I opened and read an organisation's web page.
- **[ABS]**: I saw only the abstract or record. I read it through the PubMed API or the Crossref API, because the publisher site blocked automated access (Cloudflare 403 or a cookie wall).
- **[DIGEST]**: I read a third-party summary of a paper, not the paper itself.

I left out anything I could not open, or flagged it as unverified.

---

## 1. Myers & Briggs Foundation / The Myers-Briggs Company: function-attitudes and type dynamics

- **The eight function-attitudes, with keywords.** Source: *Type dynamics: processes*, The Myers & Briggs Foundation (page undated, footer © 2026). https://www.myersbriggs.org/unique-features-of-myers-briggs/type-dynamics-processes/ [PAGE]. Each function has a one-word keyword:
  - Se: "Experiencing", "acts on concrete data in the here and now".
  - Si: "Remembering", "trusts and remembers the past".
  - Ne: "Brainstorming", "sees possibilities in the external world".
  - Ni: "Visioning", "trusts and relies on inner insights".
  - Te: "Organizing", "seeks logic and consistency in the outside world".
  - Ti: "Analyzing", "trusts internal framework".
  - Fe: "Harmonizing", "seeks harmony with and between people".
  - Fi: "Valuing", "harmony of action and thoughts with personal values".

  The page also gives the J/P rule: "we extravert the process indicated by the last letter". In ENFP, N is extraverted. In ISTJ, T is extraverted, but it is the auxiliary because the type is I.
  → *Item writing:* use these keywords as anchors for item content. Every Ne item should describe brainstorming possibilities out loud. Every Ni item should describe an inner convergent insight. Each function-attitude needs its own behavioural marker, not just the function letter.
- **Dominant, auxiliary, tertiary and inferior.** Source: *Type dynamics overview*, The Myers & Briggs Foundation (undated). https://www.myersbriggs.org/unique-features-of-myers-briggs/type-dynamics-overview/ [PAGE].
  - Dominant: "most conscious and developed".
  - Auxiliary: "support and balance the first".
  - Tertiary: "opposite the second process". The page notes it "can be expressed as either an extraverted or introverted process".
  - Inferior: "opposite the first process", "least amount of energy".

  The order is "determined by the first (E–I) and last (J–P) letters".
  → *Scoring/reporting:* the Foundation itself hedges on the attitude of the tertiary. Do not present a fixed tertiary attitude (e.g. "your tertiary is Fi") as fact. Report the dominant–auxiliary pair as the main result and the tertiary and inferior only as "theory predicts".
- **Reliability claims (from the publisher's side).** Source: *Validity & reliability*, The Myers & Briggs Foundation (undated). https://myersbriggs.org/research-and-library/validity-reliability/ [PAGE].
  - In the 2018 MBTI Manual global sample (n = 1,721), test-retest after 6–15 weeks was 0.81–0.86 on the four scales.
  - A Capraro (2002) meta-analysis is cited at about .80–.87, with T–F as low as .64.
  - Validity is argued mainly as "experiential validity" (Moyle & Hackston 2018).
  - No function-level reliability is reported.

  → *Reporting:* even the publisher supports reliability for the **four dichotomies**, not for eight separately scored functions. A function-based quiz needs its own reliability check, such as split-half or retest across sessions, before it shows function rankings with confidence.
- **2025–2026 update: the MBTI Global Step I/II assessments.** Source: *The latest version of the MBTI assessment is now live on Elevate*, The Myers-Briggs Company (assets dated January 2026). https://www.themyersbriggs.com/en-US/Access-Resources/MBTI-Global-Version [PAGE].
  - Step I has 92 items and Step II has 143.
  - The research behind it spans "almost a decade" with more than 16,000 people from 20 countries.
  - It ships with a 4th-edition manual.
  - A new **Probability Index**, "how likely a respondent is to get the same outcome if they retook", replaces the preference clarity index.

  → *Reporting:* this is a strong precedent for showing a lay "how stable is this result?" indicator. A quiz can show something similar, e.g. the margin between the 1st and 2nd ranked functions, translated into "likely the same if you retake / might flip".
- **25-year psychometric synthesis of Form M.** Source: Erford, Zhang, Sweeting et al. (2025), *Journal of Counseling & Development* 103(4), 403–407. Summary on the Foundation's JPT Research Digest: https://www.myersbriggs.org/research-and-library/journal-psychological-type/a-25-year-review-and-psychometric-synthesis-of-the-myers-briggs-type-indicator-form-m/ [DIGEST].
  - The review covers 193 studies from 1999–2024 (N = 57,170).
  - Internal consistency was .845–.921.
  - It found **no structural-validity or test-retest studies outside the publisher's manual**.

  → *Reporting:* be modest. Even the established instrument has thin independent evidence on structure and stability.

## 2. Forced-choice (FC/MFC) vs Likert: faking, ipsativity and design

- **Meta-analysis.** Source: Cao, M. & Drasgow, F. (2019). Does forcing reduce faking? A meta-analytic review of forced-choice personality measures in high-stakes situations. *Journal of Applied Psychology* 104(11), 1347–1368. https://experts.illinois.edu/en/publications/does-forcing-reduce-faking-a-meta-analytic-review-of-forced-choic/ [ABS].
  - Overall FC score inflation was d = 0.06, much lower than for single-statement (Likert) measures.
  - FC was **more faking-resistant when statements were matched on social desirability** and when it was scored normatively.
  - Job-relevant facets were inflated more.

  → *Item writing:* match the two or more options in each block on how desirable they sound in Thai. Avoid one option that reads as "obviously the good answer".
- **Experiment (N = 1,867).** Source: Wetzel, E., Frick, S. & Brown, A. (2021). Does multidimensional forced-choice prevent faking? *Psychological Assessment* 33(2), 156–170. https://pubmed.ncbi.nlm.nih.gov/33151727/ [ABS; PubMed record read via API].
  - Faking was larger for rating scales than for MFC on all Big Five traits.
  - Mixed-desirability triplets were faked more than fully matched triplets.
  - "MFC does not prevent faking completely, but it reduces faking substantially."

  → *Item writing:* desirability matching is the main lever, and blocks need to be pre-rated for desirability.
- **Graded paired comparisons (GPC, i.e. 5-point "A ←→ B" items).** Source: Schulte, N., Kaup, L., Bürkner, P.-C. & Holling, H. (2024). The fakeability of personality measurement with graded paired comparisons. *Journal of Business and Psychology* 39, 1067–1084. https://doi.org/10.1007/s10869-024-09931-0 [ABS; read via Crossref, the Springer page showed a bot challenge].
  - Score inflation was smaller for GPC than for Likert.
  - **However, GPC did not show higher honest–faking correlations**, and in some conditions the association was negative.
  - "Faking effects correlated almost perfectly with the social desirability differences of the corresponding statements."

  → *Scoring:* a graded "lean A / lean B" format is fine, but its benefit depends almost entirely on how closely the pair is matched in desirability.
- **Newest work (2026).** Source: Fuechtenhans, M. & Brown, A. (2026). Faking ipsative questionnaires: the role of general mental ability and ability to identify criteria. *Journal of Business and Psychology*. https://kar.kent.ac.uk/115678/ [FULL, CC BY].
  - The study uses a "graded preference" format scored with Thurstonian modelling.
  - Respondents could still raise scores on targeted traits, with small to medium effects (0.26–0.47).
  - People with higher cognitive ability, and those better at spotting what is being measured, faked more effectively.

  → *Item writing:* do not let the item reveal which function it measures. Avoid labels, avoid keywords such as "logic" or "values", and avoid repeated stems that make the target easy to guess.
- **Ipsativity and Thurstonian IRT.** Two sources:
  - Brown, A. & Maydeu-Olivares, A. (2011). Item response modeling of forced-choice questionnaires. *Educational and Psychological Measurement* 71(3), 460–502. https://kar.kent.ac.uk/29626/ [ABS]. Classical scoring of FC data "produce[s] ipsative data, which lead to distorted scale relationships and make comparisons between individuals problematic". Thurstonian IRT recovers normative scores when the design guidelines are met.
  - Jansen, M. T. & Schulze, R. (2024). Linear factor analytic Thurstonian forced-choice models: current status and issues. *EPM* 84(4), 660–690. https://pmc.ncbi.nlm.nih.gov/articles/PMC11268391/ [FULL]. The authors warn that block designs can bias estimates. They also note that mixed-keyed blocks, the usual fix for ipsativity, make the desirable option obvious and so easier to fake.

  → *Scoring:* a self-reflection quiz scored by simple counts is **ipsative**. It can say "within you, Ni > Te", but it **cannot** say "you have more Ni than other people". Write reports only within-person, e.g. "relative to your other answers…".
- **Older evidence on forced-choice formats.** Two sources:
  - Salgado, J. F. & Táuriz, G. (2014; online 2012). The Five-Factor Model, forced-choice personality inventories and performance. *EJWOP* 23(1), 3–30. https://doi.org/10.1080/1359432x.2012.716198 [ABS/metadata only, via Crossref].
  - Salgado, Anderson & Táuriz (2015). *JOOP*. Quasi-ipsative formats had higher validity than fully ipsative ones.

  → *Scoring:* partially ipsative designs are preferable to strict rank-everything designs. Examples are graded choices, or allowing a "both equally" option in a few items.

## 3. Validity critiques of MBTI and cognitive-function theory

- **Big Five reinterpretation.** Source: McCrae, R. R. & Costa, P. T. (1989). Reinterpreting the MBTI from the perspective of the five-factor model. *Journal of Personality* 57(1), 17–40. https://pubmed.ncbi.nlm.nih.gov/2709300/ [ABS via PubMed API].
  - There was "no support for the view that the MBTI measures truly dichotomous preferences or qualitatively distinct types".
  - The MBTI measures four relatively independent dimensions.
  - The J–P interpretation was questioned.
  - The scales do map onto four of the Big Five dimensions.

  → *Reporting:* present results as continuous leanings, not boxes. Avoid "you ARE an INTJ".
- **Theory critique.** Source: Stein, R. & Swan, A. B. (2019). Evaluating the validity of Myers-Briggs Type Indicator theory: a teaching tool and window into intuitive psychology. *Social and Personality Psychology Compass* 13(2), e12434. https://doi.org/10.1111/spc3.12434 [ABS via Crossref; Wiley returned 403]. The theory "lacks agreement with known facts and data, lacks testability, and possesses internal contradictions".
  → *Reporting:* include an honest disclaimer that the quiz is a reflective framework, not a scientifically validated typology.
- **Direct attempt to measure eight Jungian types.** Source: Hernández-Hernández, de la Roca Chiapas & García y Barragán (2017). Measurement of the Jungian psychological types in Mexican university students. *Acta de Investigación Psicológica* 7(1). https://www.redalyc.org/journal/3589/358951064010/html [FULL].
  - The instrument had 96 items, N = 1,194 and α = .87.
  - Exploratory factor analysis gave **10 factors** (32.7% of variance). Only **4** matched Jungian function-attitudes (Fi, Ti, Fe, Se).
  - Many items grouped by attitude (E/I) rather than by function.

  → *Item writing:* this is the empirical risk for an 8-function quiz. Items tend to load on extraversion vs introversion more than on N/S/T/F. Avoid confounding the attitude with sociability, e.g. writing every "e" item as "with other people". Write Ne/Se/Te/Fe items that can happen alone, and Ni/Si/Ti/Fi items that can happen in company.
- **Publisher's own Form M synthesis (see topic 1).** Erford et al. (2025) found no independent structural-validity or retest studies [DIGEST].
  → *Reporting:* this supports a "stability" caveat on every report.
- **Not opened, for awareness only:**
  - Pittenger, D. J. (2005). Cautionary comments regarding the MBTI. *Consulting Psychology Journal* 57(3), 210–221 (DOI 10.1037/1065-9293.57.3.210, metadata confirmed via Crossref, no abstract). The widely quoted "39–76% get a different type on retest after ~5 weeks" figure appears only in secondary blogs in my searches. **Do not cite the number unless the paper is checked.**
  - Reynierse (2009), "The case against type dynamics", *JPT*. I found it only through secondary pages.

## 4. Barnum/Forer effect and evidence-based, lay-readable feedback

- **The original demonstration.** Source: Forer, B. R. (1949). The fallacy of personal validation: a classroom demonstration of gullibility. *Journal of Abnormal and Social Psychology* 44(1), 118–123. DOI 10.1037/h0059240 [metadata only via Crossref; content known from secondary sources: class mean accuracy rating 4.26/5 for an identical generic profile].
  → *Reporting:* generic, flattering text will be rated "accurate" no matter what the scoring says. A high accuracy rating from users is therefore **not** evidence that the quiz is valid.
- **Review of what drives acceptance.** Source: Dickson, D. H. & Kelly, I. W. (1985). The "Barnum effect" in personality assessment: a review of the literature. *Psychological Reports* 57(2), 367–382. https://doi.org/10.2466/pr0.1985.57.2.367 [ABS via Crossref; SAGE returned 403]. "The level of acceptance of Barnum profiles depends on the relevance and favorability of the profile" and on the type of assessment.
  → *Reporting:* avoid all-positive, high-base-rate statements ("you sometimes doubt yourself"). Include trade-offs and blind spots tied to the person's ranking. Prefer statements that would be **false** for someone with the opposite result.
- **Barnum as a confound in assessment feedback.** Source: Lilienfeld, S. O., Garb, H. N. & Wood, J. M. (2011). Unresolved questions concerning the effectiveness of psychological assessment as a therapeutic intervention. *Psychological Assessment* 23(4), 1047–1055. https://pubmed.ncbi.nlm.nih.gov/22122676/ [ABS via PubMed API]. Studies of assessment feedback "neglected to rule out Barnum effects".
  → *Reporting:* tie each claim to the user's actual answers, e.g. "In 5 of 6 'planning' questions you chose…". Feedback built from citations is falsifiable and is not Barnum text.
- **Recent replication (secondary only).** Gontier & Thomassin (2025, Université de Nantes). 2,269 students rated a fake "validated" test's generic feedback at a mean of 3.59/5, about 85% gave 4–5, and 77% wanted to use the test professionally. The source is a Gigazine news summary: https://gigazine.net/gsc_news/en/20250703-barnum-effect [DIGEST]. The APA PsycNet record (2025-93651-009) would not load. **Don't cite as primary.**
  → *Reporting:* the effect is alive in 2025 and also affects people with psychology training.
- **Score-reporting standards for lay readers.** Source: Zenisky, A. L., O'Donnell, F. & Hambleton, R. K. (2025). Reporting scores and other results. In Cook & Pitoniak (Eds.), *Educational Measurement* (5th ed., pp. 895–958). OUP. PDF on the NCME site: https://ncme.org/wp-content/uploads/2026/01/Educational-Measurement-Fifth-Edition-Chapter-13.pdf [FULL]. Its report-review checklist (Table 13.1) asks:
  - "How is the topic of score imprecision handled…?"
  - "What strategies are used to guide users away from known misinterpretations?"
  - Is the report "free of statistical and other technical jargon"?
  - Are categories "not stigmatizing"?
  - Is there "sufficient information… without being overwhelming"?
  - Are translations validated?
  - Does it link results to follow-up actions?

  → *Reporting:* use a plain-Thai summary first, then the evidence (quoted answers), then a stability or uncertainty note, then "what to try" actions. Leave the jargon (Ni/Te) in an expandable section.

## 5. Response styles and social desirability in Thai and East/Southeast Asian respondents

- **Cross-national response styles.** Source: Harzing, A.-W. (2006). Response styles in cross-national survey research: a 26-country study. *International Journal of Cross Cultural Management* 6(2), 243–266. Reposted PDF: https://www.deep-insight.com/wp-content/uploads/2018/09/2006-IJCCM-response-styles.pdf [FULL]. Author's summary: https://harzing.com/blog/2017/02/what-if-fully-agree-doesnt-mean-the-same-thing-across-cultures [PAGE].
  - Power distance, collectivism, uncertainty avoidance and extraversion predict acquiescence and positive extreme responding.
  - China and Hong Kong show high midpoint responding (MRS). Malaysia and India show the reverse. Japan has the highest MRS and the lowest acquiescence.
  - **Thailand was not among the 26 countries.**
  - Per the blog, Harzing et al. (2009) found that **ranking "completely eliminates both MRS/ERS and ARS/DRS"**. Going from 5- to 7-point scales reduced MRS and ERS but not acquiescence.

  → *Scoring:* this is strong support for ranking or forced-choice over agree–disagree Likert in a Southeast Asian context. If any Likert items remain, balance their keying.
- **Midpoint use by East Asian students.** Source: Chen, C., Lee, S.-Y. & Stevenson, H. W. (1995). Response style and cross-cultural comparisons of rating scales among East Asian and North American students. *Psychological Science* 6(3), 170–175. https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.1995.tb00327.x/ [PAGE summary].
  - Japanese and Taiwanese students chose the midpoint more often. US students chose the extremes more often.
  - Individualism predicted extreme responding and less midpoint use.

  → *Item writing:* with a graded A↔B format, expect heavy use of the middle "equal" option. Either remove the midpoint (4- or 6-point) or treat "equal" answers as low-information when computing the margin.
- **Two kinds of desirable responding.** Source: Lalwani, A. K., Shavitt, S. & Johnson, T. (2006). What is the relation between cultural orientation and socially desirable responding? *JPSP* 90(1), 165–178. https://pubmed.ncbi.nlm.nih.gov/16448316/ [ABS via PubMed API].
  - Singaporean and Asian-American respondents scored higher on **impression management**, i.e. presenting actions as normatively appropriate.
  - US and European-American respondents scored higher on **self-deceptive enhancement**, i.e. inflating one's own abilities.
  - Collectivism correlated with impression management.

  → *Item writing:* for Thai users, the desirability risk is mainly "socially proper" options, such as being considerate, harmonious or respectful (close to Fe and kreng jai). Make the Fe option no more "polite-sounding" than its paired option.
- **Thai sample.** Source: Fischer, R. (2021). Alternative four-factor structure of the Mini-IPIP in Thailand. *International Journal of Personality Psychology* 7, 35–42. https://doi.org/10.21827/ijpp.7.37978 [FULL].
  - In a Southern Thai community sample (N = 212) and a student sample (N = 201), the Big Five did not replicate.
  - Socially oriented factors emerged instead: Social Approach/Withdrawal, "Traditional Affiliation", and "Egotism".
  - The author notes the "negative connotation in this cultural context associated with talking to a lot of people [at parties]".

  → *Item writing:* Western extraversion items can carry different moral weight in Thai. Pre-test item wording with Thai readers for hidden desirability before relying on it.
- **Asian-American students in the US.** Source: Wang, R., Hempton, B., Dugan, J. P. & Komives, S. R. (2008). Cultural differences: why do Asians avoid extreme responses? *Survey Practice* 1(3). https://www.surveypractice.org/article/2913-cultural-differences-why-do-asians-avoid-ext [PAGE].
  - In N ≈ 55,600, Asian and Asian-American students chose midpoints more often on most items.
  - The authors recommend trying scales without a midpoint, or other formats.

  → Supports the same design choice as above.
- **Gap, stated honestly:** I found **no peer-reviewed quantitative study of acquiescence or midpoint use specifically in Thai respondents**, and none on kreng jai as a survey response bias. Leads I could not open:
  - Komin, S. (1990). *Psychology of the Thai People* (NIDA).
  - A 2013 Chulalongkorn PhD on a Thai socially desirable responding scale (Jantawarn), at cuir.car.chula.ac.th. The server returned 503.

  Treat kreng jai as a plausible hypothesis, not an established finding.

## 6. Hobbies, taste/aesthetics and friendship in relation to personality

- **Hobbies over time.** Source: Sander, J., Schumann, P., Richter, D. & Specht, J. (2021). Leisure activities as a driver of personality development? A random-intercept cross-lagged panel model across 13 years in adulthood. *Collabra: Psychology* 7(1), 23473. https://ideas.repec.org/a/zbw/espost/238209.html [ABS].
  - The data are the German SOEP (N ≈ 55,790), 2005–2017.
  - Between persons, leisure activities were "most strongly associated with openness to experience".
  - Within persons, extraversion was reciprocally linked only with overall participation and socialising.

  → *Item writing (hobbies):* hobby items mostly separate N-leaning from S-leaning, e.g. novel or ideas-based vs hands-on or familiar pursuits. They say little about T/F. Write hobby items about *how* a person engages, e.g. "I improvise variations" (Ne) vs "I perfect a familiar routine" (Si), rather than *which* hobby, because which hobby depends on access and money.
- **Interests are related to traits but distinct.** Source: Kandler, C. & Piepenburg, A. (2020). Leisure interests and engagement: distinct dispositions or only expressions of personality traits? *Journal of Individual Differences* 41(4). DOI 10.1027/1614-0001/a000308 [ABS via Crossref]. Correlations between traits and leisure interests were mostly small to moderate, and interests are as stable as traits or more so.
  → *Scoring:* give hobby items modest weight, and do not infer type from a hobby name.
- **Taste in music.** Source: Greenberg, D. M., Wride, S. J., Snowden, D. A., Spathis, D., Potter, J. & Rentfrow, P. J. (2022). Universals and variations in musical preferences: a study of preferential reactions to Western music in 53 countries. *JPSP* 122(2), 286–309. https://pubmed.ncbi.nlm.nih.gov/35130023/ [ABS via PubMed API].
  - N = 356,649 people across 53 countries.
  - Personality–preference links were largely consistent across countries.
  - Extraversion went with "Contemporary" (upbeat, rhythmic, electronic) music. Openness went with "Sophisticated" (complex, improvisational, instrumental) music.

  → *Item writing (taste):* frame taste items around attributes, e.g. complexity vs familiarity, or energy vs calm. Avoid genres, whose meaning varies by culture.
- **Aesthetic experience.** Two sources:
  - McCrae, R. R. (2007). Aesthetic chills as a universal marker of openness to experience. *Motivation and Emotion* 31, 5–11. DOI 10.1007/s11031-007-9053-1 [metadata only].
  - Nusbaum, E. C. & Silvia, P. J. (2010). Shivers and timbres. *Social Psychological and Personality Science*. DOI 10.1177/1948550610386810 [ABS via Crossref]. Openness was "the strongest predictor of the typical experience of chills during music". Openness also predicted preference for "reflective and complex genres".

  → *Item writing (taste):* "being moved or absorbed by beauty" mainly indexes Openness, roughly the N side and possibly Fi. Do not use it as a pure Fi marker.
- **Number of close friends.** Source: Kang, W. (2023). Establishing the associations between the Big Five personality traits and self-reported number of close friends: a cross-sectional and longitudinal study. *Acta Psychologica* 239, 104010. https://pubmed.ncbi.nlm.nih.gov/37591156/ [ABS via PubMed API].
  - The data are UK Household Longitudinal Study (UKHLS), cross-sectional N = 32,990 and longitudinal N = 22,383.
  - Extraversion, Agreeableness and Openness were positively linked to the number of close friends. Neuroticism was negatively linked.
  - Longitudinally, Openness predicted increases in the number of friends.

  → *Item writing (friends):* friend *count* is confounded with E/I and Agreeableness. For function items, ask about *what you do with friends*: give advice by logic (Te/Ti) or by attunement (Fe/Fi), plan vs improvise meetups (J/P-linked), reminisce (Si) vs explore new things together (Ne/Se). Don't ask about network size.
- **Extraversion and network layers.** Source: Pollet, T. V., Roberts, S. G. B. & Dunbar, R. I. M. (2011). Extraverts have larger social network layers. *Journal of Individual Differences* 32(3), 161–169. DOI 10.1027/1614-0001/a000048 [ABS via Crossref].
  - N = 117.
  - Extraverts had larger networks at every layer (r ≈ .20–.23), but they were *not* emotionally closer to each member.

  → *Item writing:* closeness and depth items should not be keyed to I/E. Introverted-attitude functions can be very relationally invested.
- Not opened, for further reading: Selden, M. & Goodie, A. S. (2018). Review of the effects of Five Factor Model personality traits on network structures and perceptions of structure. *Social Networks* 52, 81–99. DOI 10.1016/j.socnet.2017.05.007 [metadata only].

---

## Recommended REFS entries

Fourteen entries. All URLs were opened in this session. Where a publisher page blocked access, the DOI URL is given, and its content was checked through PubMed or Crossref; the `lv` field marks this as "บทคัดย่อ".

```json
[
  {"t": "มูลนิธิ Myers & Briggs: นิยามกระบวนการทั้ง 8 (Se ประสบ, Si ระลึก, Ne ระดมความคิด, Ni มองภาพอนาคต, Te จัดระบบ, Ti วิเคราะห์, Fe สร้างความกลมกลืน, Fi ยึดคุณค่า) และกฎว่าตัวอักษร J/P บอกกระบวนการที่แสดงออกภายนอก", "u": "https://www.myersbriggs.org/unique-features-of-myers-briggs/type-dynamics-processes/", "lv": "ตรวจแล้ว 2026-10-16 · หน้าเว็บมูลนิธิผู้พัฒนา (ไม่ระบุวันที่)"},
  {"t": "มูลนิธิ Myers & Briggs: ค่าความเที่ยงแบบสอบซ้ำของ MBTI Step I อยู่ที่ 0.81–0.86 (คู่มือ 2018, n=1,721) แต่เป็นค่าระดับ 4 มิติ ไม่ใช่ระดับฟังก์ชันรายตัว และหลักฐานส่วนใหญ่มาจากผู้จัดพิมพ์เอง", "u": "https://myersbriggs.org/research-and-library/validity-reliability/", "lv": "ตรวจแล้ว 2026-10-16 · หน้าเว็บมูลนิธิผู้พัฒนา (มีส่วนได้เสีย)"},
  {"t": "The Myers-Briggs Company: MBTI Global Step I/II รุ่นใหม่ (92/143 ข้อ, วิจัยกับ 16,000+ คนใน 20 ประเทศ) มี Probability Index บอกโอกาสที่จะได้ผลเดิมหากทำซ้ำ เป็นแบบอย่างการบอกความไม่แน่นอนแก่ผู้อ่านทั่วไป", "u": "https://www.themyersbriggs.com/en-US/Access-Resources/MBTI-Global-Version", "lv": "ตรวจแล้ว 2026-10-16 · หน้าเว็บผู้จัดพิมพ์ (เอกสารลงวันที่ ม.ค. 2026)"},
  {"t": "Cao & Drasgow (2019) อภิมาน: แบบบังคับเลือกมีคะแนนเฟ้อจากการแกล้งตอบเพียง d=0.06 ต่ำกว่าแบบ Likert มาก และต้านการแกล้งได้ดีขึ้นเมื่อข้อความในชุดเดียวกันน่าพึงปรารถนาพอ ๆ กัน", "u": "https://experts.illinois.edu/en/publications/does-forcing-reduce-faking-a-meta-analytic-review-of-forced-choic/", "lv": "ตรวจแล้ว 2026-10-16 · อภิมานวิเคราะห์ peer-reviewed (อ่านบทคัดย่อ)"},
  {"t": "Wetzel, Frick & Brown (2021) ทดลอง N=1,867: แบบบังคับเลือกหลายมิติลดการแกล้งตอบได้มากกว่ามาตรประมาณค่า แต่ไม่หมด และลดได้อีกเมื่อจับคู่ความน่าพึงปรารถนาของข้อความในชุด", "u": "https://pubmed.ncbi.nlm.nih.gov/33151727/", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed (บทคัดย่อผ่าน PubMed)"},
  {"t": "Fuechtenhans & Brown (2026): แบบ graded preference ที่ให้คะแนนด้วย Thurstonian ยังถูกแกล้งได้ระดับเล็กถึงกลาง (0.26–0.47) โดยคนที่เดาได้ว่าข้อวัดอะไรแกล้งได้ตรงเป้ากว่า จึงไม่ควรให้ข้อคำถามเผยว่าวัดฟังก์ชันใด", "u": "https://kar.kent.ac.uk/115678/", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed ฉบับเต็ม (CC BY)"},
  {"t": "McCrae & Costa (1989): ไม่พบหลักฐานว่า MBTI วัด 'ประเภท' ที่แยกขาดจริง แต่วัดมิติต่อเนื่อง 4 มิติที่สอดคล้องกับ Big Five จึงควรรายงานผลเป็นระดับความโน้มเอียง ไม่ใช่กล่องประเภท", "u": "https://pubmed.ncbi.nlm.nih.gov/2709300/", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed (บทคัดย่อผ่าน PubMed)"},
  {"t": "Stein & Swan (2019): ทฤษฎีเบื้องหลัง MBTI ไม่สอดคล้องกับข้อมูลที่รู้แล้ว ทดสอบไม่ได้ และขัดแย้งในตัวเอง จึงควรระบุว่าแบบทดสอบนี้เป็นกรอบสะท้อนตนเอง ไม่ใช่เครื่องมือวินิจฉัย", "u": "https://doi.org/10.1111/spc3.12434", "lv": "ตรวจแล้ว 2026-10-16 · บทความทบทวน peer-reviewed (บทคัดย่อผ่าน Crossref)"},
  {"t": "Dickson & Kelly (1985) ทบทวนปรากฏการณ์ Barnum: คนยอมรับคำบรรยายบุคลิกกว้าง ๆ ว่าตรงกับตนมากขึ้นเมื่อเป็นเชิงบวกและดูเกี่ยวกับตน รายงานจึงควรอ้างคำตอบจริงและระบุจุดอ่อนที่เฉพาะเจาะจง", "u": "https://doi.org/10.2466/pr0.1985.57.2.367", "lv": "ตรวจแล้ว 2026-10-16 · บทความทบทวน peer-reviewed (บทคัดย่อผ่าน Crossref)"},
  {"t": "Zenisky, O'Donnell & Hambleton (2025) บทรายงานผลคะแนนใน Educational Measurement ฉบับที่ 5: รายการตรวจรายงานผล เช่น บอกความคลาดเคลื่อนของคะแนน กันการตีความผิด เลี่ยงศัพท์เทคนิค ไม่ตีตรา และเชื่อมผลกับสิ่งที่ทำต่อได้", "u": "https://ncme.org/wp-content/uploads/2026/01/Educational-Measurement-Fifth-Edition-Chapter-13.pdf", "lv": "ตรวจแล้ว 2026-10-16 · บทในตำรามาตรฐาน (OUP/NCME) ฉบับเต็ม"},
  {"t": "Harzing (2006) และงานต่อเนื่อง: รูปแบบการตอบ เช่น ตอบเห็นด้วยไว้ก่อน หรือตอบกลาง ๆ ต่างกันมากตามวัฒนธรรมและสัมพันธ์กับระยะห่างเชิงอำนาจและความเป็นกลุ่มนิยม ส่วนการให้จัดอันดับขจัดรูปแบบการตอบเหล่านี้ได้", "u": "https://harzing.com/blog/2017/02/what-if-fully-agree-doesnt-mean-the-same-thing-across-cultures", "lv": "ตรวจแล้ว 2026-10-16 · สรุปโดยผู้วิจัยเอง (อ้างงาน peer-reviewed)"},
  {"t": "Fischer (2021) ศึกษาตัวอย่างไทย (N=212 และ 201): โครงสร้าง Big Five จาก Mini-IPIP ไม่ซ้ำแบบตะวันตก และข้อแบบ 'คุยกับคนมากมายในงานเลี้ยง' มีนัยเชิงลบในบริบทไทย จึงต้องทดสอบนัยความน่าพึงปรารถนาของถ้อยคำกับผู้อ่านไทย", "u": "https://doi.org/10.21827/ijpp.7.37978", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed ฉบับเต็ม (open access)"},
  {"t": "Greenberg และคณะ (2022) ศึกษา 356,649 คนใน 53 ประเทศ: บุคลิกภาพสัมพันธ์กับรสนิยมดนตรีคล้ายกันข้ามประเทศ เช่น คนเปิดรับประสบการณ์ชอบดนตรีซับซ้อน คนแสดงตัวชอบดนตรีจังหวะสนุก จึงควรถามรสนิยมผ่านคุณลักษณะของดนตรี ไม่ใช่ชื่อแนวเพลง", "u": "https://pubmed.ncbi.nlm.nih.gov/35130023/", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed (บทคัดย่อผ่าน PubMed)"},
  {"t": "Kang (2023) ข้อมูล UKHLS (N=32,990 / 22,383): จำนวนเพื่อนสนิทสัมพันธ์กับการแสดงตัว ความเป็นมิตร และการเปิดรับประสบการณ์ จึงควรถามว่าทำอะไรกับเพื่อน มากกว่าถามจำนวนเพื่อน เพื่อไม่ให้ปนกับ E/I", "u": "https://pubmed.ncbi.nlm.nih.gov/37591156/", "lv": "ตรวจแล้ว 2026-10-16 · บทความวิจัย peer-reviewed (บทคัดย่อผ่าน PubMed)"}
]
```
