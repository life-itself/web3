---
title: Allen, Hilary J. ‘DeFi. Shadow Banking 2.0?’
date: 2022-05-10
created: 2022-05-10
description: "A summary of Hilary Allen's 2022 paper 'DeFi: Shadow Banking 2.0?'. In this paper Allen explores the concept of decentralized finance, or DeFi, as 'Shadow Banking' - services which provide functional equivalents for banking products but operate outside the regulated banking sphere. Allen likens DeFi to services which contributed to the 2008 banking crisis and thus advises precautionary regulation of DeFi in order to limit its growth and to cordon it off from the established financial system and real-world economy."
featured: false
aliases: notes/defi-shadow-banking-2-0.md
---

* Citation: Citation: Allen, Hilary J. ‘DeFi: Shadow Banking 2.0?’ SSRN Electronic Journal, 2022. https://doi.org/10.2139/ssrn.4038788.
* Wiki topic:  [DeFi](../concepts/defi.md)

***

# Overview

This paper explores what the author terms “Shadow Banking”: services which provide functional equivalents for banking products but operate outside the regulated banking sphere. Allen describes 'Shadow Banking 1.0', the shadow banking services which contributed to the 2008 banking crisis, focussing in particular on credit default swaps, mortgage-backed securities and money market mutual funds. 

Allen then explains how we may be facing 'Shadow Banking 2.0' in the form of decentralized finance, arguing that if DeFi is permitted to develop without any regulatory intervention, it will magnify the tendencies towards heightened leverage, rigidity, and runs that characterized Shadow Banking 1.0. Given an absence of evidenced and real (as opposed to aspirational) benefits of DeFi, Allen argues for precautionary regulation of DeFi, designed to limit its growth and to cordon it off from the established financial system and real-world economy.

# Summary

## 1. Introduction

* This essay argues that **policymakers should take a precautionary approach to [DeFi](https://web3.lifeitself.us/concepts/defi.md) regulation**, limiting the use of DeFi where financial regulators are able to exercise jurisdiction, and then cordoning off whatever DeFi remains from the established financial system and real-world economy. 
  * This approach will admittedly limit innovation in the DeFi ecosystem, but not all innovation is good innovation.
  * DeFi does not purport to provide any new types of financial products or services, it just aspires to deliver existing financial products and services in a decentralized way. **Given that decentralization is an entirely unrealistic goal, we are left with technology that may be interesting from an academic perspective, but in practical terms is inefficient. As such, policymakers should take preemptive steps to prevent the growth of Shadow Banking 2.0.**

## 2. Shadow Banking 1.0

* Shadow banking describes financial activities that are the functional equivalent of activities carried out in the regulated banking system, but which escape bank regulation.
* 'Shadow Banking 1.0' refers to the services operating outside the regulated banking sphere which contributed to the 2008 banking crisis.
* Allen uses credit default swaps, money market mutual funds, and mortgage-backed securitization to illustrate some of the fragilities that the first generation of shadow banking 1.0 introduced into the financial system. 

## 3. DeFi
### *Introduction to DeFi*
* DeFi: “the term is typically used to describe a software application (known as a “Dapp”) that serves as a simulacrum of traditional financial services provided using coins and tokens hosted on a permissionless distributed ledger.”
* Proponents of DeFi assert that these technologies will be used in concert to provide new versions of “payments, lending, trading, investments, insurance, and asset management” services. Such outcomes are currently largely aspirational and not yet a reality. 
* DeFi technologies avoid much of the regulation that typically applies to the existing financial services they are emulating, but still have many of the same (or worse) fragilities as those existing services:
  * (i) the unlimited production of tokens can introduce more leverage into the system, potentially outstripping the leverage associated with credit default swaps in the lead-up to the 2008 crisis; 
  * (ii) smart contracts are designed to be even more rigid than the mechanisms that turned mortgage-backed securitizations into “suicide pacts” during the crisis; and 
  * (iii) stablecoins share many of the features of money market mutual funds that made them susceptible to runs in 2008 (and again in 2020).
* In addition to these fragilities, DeFi Dapps are highly complex. 
  * Few investors are able to read the computer code of the smart contracts that make up the Dapps – and even those who can will struggle to find flaws simply by looking at the code in the abstract.
  * Added complexity arises as a result of the convoluted governance structure that often controls the Dapps’ software, as well as the governance structure of the permissioned ledgers on which the Dapps run.
    * If a problem were to occur and emergency intervention needed to be provided within the DeFi ecosystem to head-off catastrophic spillover effects for the rest of the financial system, it could be difficult to figure out who to provide emergency support to. 

### *DeFi as Shadow Banking 2.0*
* Leverage
  * With DeFi, financial assets in the form of tokens can be created out of thin air by anyone with computer programming knowledge, then used as collateral for loans that can then be used to acquire yet more assets. **An unconstrained supply of financial assets means more opportunities for asset [bubbles](https://web3.lifeitself.us/concepts/bubble.md) to grow, and more assets to be dumped during fire sales.** 
  * Tokens are also being used (just as CDS were) to create synthetic exposure to real-world assets: for example, the Mirror Protocol has been developed to create synthetic exposure to real-world assets on the distributed ledger. 
  * The Bank for International Settlements observed that unregulated DeFi versions of [derivatives](https://web3.lifeitself.us/concepts/derivative.md) trading on decentralized exchanges are multiplying the amount of leverage in the DeFi ecosystem<sup>1</sup> and that fire sales occurred in the DeFi ecosystem in September 2021 as a result of deleveraging<sup>2</sup>.
  * **Financial regulators should be very wary of the possibility of unlimited leverage building up in the DeFi ecosystem, particularly if there are channels of contagion that would allow deleveraging/fire sales in the DeFi ecosystem to impact the mainstream financial system and broader economy.**
    * Recent IMF research has found increasing correlation between the performance of crypto investments and more traditional investments like equities (especially during market volatility), and cautioned that “[i]ncreased crypto-stocks correlation raises the possibility of spillovers of investor sentiment between those asset classes.”<sup>3</sup>
    * A consortium of regulated banks have recently proposed issuing a [stablecoin](https://web3.lifeitself.us/concepts/stablecoin) to compete with Tether and USDC.<sup>4</sup>
* Rigidity
  * When critical parts of the financial system become overleveraged, flexibility may be needed during the bust cycle to release the largest entities from obligations to respond to margin calls or repay loans – otherwise the failures of intermediaries and fire sales will have ripple effects that can drag down the whole system. **[Smart contracts](https://web3.lifeitself.us/concepts/smart-contracts.md) may prove too rigid to provide the flexibility needed to avoid such an outcome.**
* Runs
  * If something were to shake confidence in stablecoins’ acceptance in the DeFi ecosystem (a hack, a problem with the reserve of assets backing a stablecoin, a problem with the smart contracts managing the value of a decentralized stablecoin), we could expect holders to exchange their stablecoins for [fiat currency](https://web3.lifeitself.us/concepts/fiat-money.md) and exchanges to seek redemption, forcing stablecoin issuers to start liquidating the reserve of assets backing the stablecoin, depressing the market value of those assets.
  * If centralized stablecoin issuers start to become an important source of capital for the real economy (as money market mutual funds did before them) then runs on stablecoins will be a potential source of systemic risk. 

## 4. How to respond

* In deciding how regulation should respond to DeFi, it is important to take a step back from **what DeFi aspires to be**, and consider **what DeFi actually is right now**.
* **DeFi is not yet an entrenched part of our financial system, and regulators still have the opportunity to take a precautionary approach that will have a real impact on how DeFi develops.**
  * If the DeFi ecosystem does grow and becomes integral to broader economic functioning, **regulators will need to respond to those destabilizing problems** – but experience with regulating Shadow Banking 1.0 suggests that those kinds of reforms will be an incomplete solution.
  * **Subjecting DeFi to bank-like regulation too early runs the risk of legitimizing and turbocharging the growth of DeFi** in a way that would not be possible without regulatory imprimatur (essentially making Shadow Banking 2.0 a self-fulfilling prophecy).
  * **The more effective approach is to deploy regulation to separate DeFi from the established financial system, and limit its growth more generally.**
* **Given the risks, regulators should take steps to limit the growth of DeFi and prevent its integration with the established financial system** – unless there were something truly transformative about DeFi innovation.

### *The Cost-Benefit Calculus: Decentralization*
* DeFi, together with the broader vision of a decentralized [“Web3”](https://web3.lifeitself.us/concepts/web3.md), is marketed in **aspirational terms**; its value is consistently described as lying in its potential.
* **DeFi doesn’t aspire to provide any new financial product or service: instead, the idea is to provide existing financial products and services in a decentralized way.** 
* Decentralization, however, is “an entirely unrealistic aspiration” due to the “inescapable need for centralized governance” and the fact that the DeFi ecosystem is already full of intermediaries. 
  * The Bank for International Settlements has observed that there is “a “decentralisation illusion” in DeFi due to the inescapable need for centralised governance and the tendency of blockchain consensus mechanisms to concentrate power.”<sup>5</sup>
  * Tim O’Reilly: “history teaches us that there will always be new avenues for power to become centralized”; “Blockchain turned out to be the most rapid recentralization of a decentralized technology that I've seen in my lifetime.”<sup>6</sup>
  * Where there are opportunities to profit from streamlining unwieldy decentralized services for users (especially when venture capitalists are standing ready to fund such projects), the evolution of centralized intermediaries seems inevitable. David Rosenthal: “economics forces successful permissionless blockchains to centralize.”<sup>7</sup>
  * Every level of infrastructure involved in providing DeFi products and services depends on decisions made by human beings - these human beings have the same incentives to concentrate wealth and power that people have always had.
  * Many of the investors driving the growth of DeFi are institutional players, often engaging in transactions worth $10 million or more of cryptocurrency, and the holder of a single governance token in a DAO administering a DeFi Dapp is unlikely to have any real voice in how the [DAO](https://web3.lifeitself.us/concepts/dao.md) or the Dapp operates.
* The Dapps operate on top of another layer of infrastructure: a distributed ledger, like the Ethereum blockchain, which is also dependent on many humans for its functioning.  Most decisions relating to the operation of a distributed ledger are made by the people with the power to validate transactions on that ledger, and by the core developers of the computer code governing that ledger.
  * So-called “core developers” “function as the leaders and decision makers in relation to the code.”<sup>8</sup>
  * Validators are also important actors, because they determine the definitive version of the ledger (which is the definitive record of who owns the crypto assets associated with that ledger).
* Ultimately, trust is required in the DeFi ecosystem. **A decentralized foundation just makes financial services more convoluted and replaces trust in established institutions (particularly government institutions and regulated banks) with trust in different – and sometimes unidentified – actors.**

### *The Cost-Benefit Calculus: Efficiency and Financial Inclusion*

* Argues that the risks cannot be justified by additional claimed benefits such as efficiency and financial inclusion. 
* It does not seem possible that a technology that has been intentionally made more complex (in order to nominally decentralize) could ever be more efficient than a simpler, centralized alternative.
  * No matter which validation mechanism is chosen for a decentralized ledger ([proof-of-work](https://web3.lifeitself.us/concepts/proof-of-work.md), [proof-of-stake](https://web3.lifeitself.us/concepts/proof-of-stake.md), or something else), it will always be slower and more cumbersome than validation by a centralized intermediary.
* A recent World Economic Forum report on stablecoins found: **“stablecoins are subject to many of the same barriers that constrain citizens from accessing other financial products and services**, such as bank accounts, mobile money accounts or fully digital remittance providers. Where stablecoins are accessible, they generally address financial inclusion barriers to a similar degree as other digital financial services… **stablecoins as currently deployed would not provide compelling new benefits for financial inclusion beyond those offered by pre-existing options.”**
* Reading financial disclosures is already hard enough, should people really be expected to understand the ins and outs of code as well before they can understand their financial services?

### *Regulatory Proposals*
* **Given the financial stability risks that DeFi would create if it were allowed to grow into Shadow Banking 2.0, and given that proponents of the technology involved struggle to demonstrate any concrete superiority over simpler centralized alternatives, policymakers should pursue policies that prevent DeFi from growing.** 
* Because negative spillover effects from DeFi will wreak the most havoc on the real economy if regulated banks become integrated into the DeFi ecosystem, **steps should be taken to insulate regulated banks from DeFi.**
  * As a priority, regulated banks should be prohibited from: issuing stablecoins or providing any Dapps; holding stablecoin reserves in a deposit account; or investing in any Dapp or stablecoin (banking regulators already have the authority they need to take these steps).
    * The President’s Working Group Report recommended that “legislation should require stablecoin issuers to be insured depository institutions.”<sup>9</sup> This recommendation seeks to address stablecoin-related run risk, but if followed, would create [moral hazard](https://web3.lifeitself.us/concepts/moral-hazard.md) by extending the public safety net of deposit insurance to the DeFi ecosystem in which stablecoins are deployed. **Taking this step would legitimize stablecoins in a way that would likely fuel, rather than limit, the growth of DeFi.**
* Other possible regulatory strategies designed to prevent DeFi from growing into Shadow Banking 2.0: 
  * Gorton and Zhang have noted that Congress has the authority to “tax competitors of [the US dollar] out of existence.”<sup>10</sup>
  * Congress could adopt a licensing regime for Dapps and stablecoins where the applicant would need to demonstrate:
  (i) that the Dapp/stablecoin has a purpose that is connected to real-world economic growth (purely aspirational goals would not satisfy this test);
  (ii) that the applicant has the institutional capacity to manage both the financial and technological risks associated with the Dapp/stablecoin; and 
  (iii) that the Dapp/stablecoin is unlikely to have a negative impact on the stability of the financial system or on monetary policy.
      * Most of the stablecoins and Dapps currently available would struggle to satisfy these licensing requirements, and so such a licensing regime would limit the growth of DeFi. And if a license were ultimately awarded, the licensing process would still offer regulators the opportunity to make interventions to protect consumers and the financial system.
      * While regulators may sometimes struggle to assert jurisdiction over the relevant people (either because regulators cannot determine their identities, or because they are located outside of the United States and lack US assets to enforce judgments against), the licensing regime could still help contain Dapps and stablecoins by prohibiting centralized intermediaries (like wallets and exchanges) from providing any services in connection with an unlicensed Dapp or stablecoin.
* Until such licensing measures can be put in place, **the SEC and CFTC should continue to regulate stablecoins and Dapps as speculative investments where appropriate, and the Financial Stability Oversight Council and the Office of Financial Research should continue to monitor the DeFi ecosystem for potential spillovers that could harm the financial system and real economy.**

## Conclusion

* DeFi’s aspirational promises can distract us from fixing and rehabilitating the financial system we actually have. 
* Unbanked and underbanked individuals would benefit enormously from access to simple, quick, low-cost financial services, and it seems to be a lack of political will (rather than lack of innovation) that prevents these from being provided. **Perhaps if DeFi can be contained so that it does not evolve into Shadow Banking 2.0, then policymakers can devote more of their energies to solving these underlying problems.** 

***

## References

1. Sirio Aramonte et al., DeFi Risks and the Decentralization Illusion, BIS QUARTERLY REVIEW, 29 (Dec. 2021).
2. Id. at 30.
3. Tobias Adrian et al., Crypto Prices Move More in Sync With Stocks, Posing New Risks, IMF BLOG (Jan. 11, 2022).
4. Jamie Crawley, US Banks Form Group to Offer USDF Stablecoin, COINDESK (Jan. 12, 2022).
5. Sirio Aramonte et al., DeFi Risks and the Decentralization Illusion, BIS QUARTERLY REVIEW, 22 (Dec. 2021).
6. Dan Patterson, Internet guru Tim O’Reilly on Web3: “Get ready for the crash”, CBSNEWS (Feb. 10, 2022).
7. David Rosenthal, EE380 Talk, (Feb. 9, 2022), https://blog.dshr.org/2022/02/ee380-talk.html.
8. Angela Walch, In Code(rs) We Trust: Software Developers as Fiduciaries in Public Blockchains, in Regulating Blockchain: Techno-Social And Legal Challenges (Hacker et al, Eds), 61 (2019). 
9. President’s Working Group on Financial Markets, REPORT ON STABLECOINS, 2 (November 2021).
10. Gary B. Gorton & Jeffery Zhang, Wildcat Stablecoins, 40 (Jul. 19, 2021), https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3888752.
