# From Bonding Curves to Commons Market Makers

Emmett, J., & Slater, M. (2022, June 9). From Bonding Curves to Commons Market Makers. _Medium_. https://medium.com/@cryptocommonsassociation/from-bonding-curves-to-commons-market-makers-5c735604bd4c

# Summary

* [AMM (Automated Market Maker)](../concepts/amm.md): an algorithm that  exchange one [cryptoasset (token)](../concepts/cryptoasset.md) for another e.g. Ether for Bitcoin.
* Emmet distinguishes two types of AMM:
  * Secondary Automated Market Makers (SAMMs): these are the classic kind running the distributed exchanges (Uniswap, Curve) etc. Secondary because they don't issue new tokens but simply trade existing ones.
  * Primary Automated Market Makers (PAMMs): (aka [bonding-curves](bonding-curves.md)) are able to issue new tokens (as well as to buy them back). Hence the name primary because they are a primary source of tokens. 
* Matt Slats = Matthew Slater https://matslats.net
  * Clearly pretty sceptical of the whole bonding curve and commons stuff: "I still have many concerns that new and repurposed language is being used to cover up for poorly designed financial mechanics and merely give the impression of innovation without real value underneath.** Given the growth of the crypto field in the last decade, it must be very tempting for people to overestimate their cleverness, and to mistake financial engineering for wealth creation."

# Excerpts

### PAMMs only work if people buy so why would people buy in "commons" projects? (Ans: Not really clear)

> Millennials are maturing and their values are starting to influence finance, and they need a livable planet before they need ever-increasing financial returns. If they could park their savings directly in planting trees or cleaning up trash in order to see and measure ‘returns’ in ecosystem health, rather than speculating in blue-chip ‘business-as-usual’ stocks, they just might

Full quote

> **Matslats:** The basic idea is pretty simple — I’m trying to think of the nearest real-world examples of organisations using the fact that they issue an asset to control the market in it.
> 
> I’m reminded of how sometimes countries will use reserves of their own currency and of harder currencies to manipulate the rate of their own currency on global markets. Similarly these last years we’ve been hearing about cash rich companies buying back their own shares because pumping the price this way is the best use of excess cash. And conversely companies issue new shares all the time as bonuses to staff.
> 
> **Jeff:** Right — there are many parallels to how these kinds of ‘economic leverage’ can occur, but the difference is that now blockchains enable purpose-driven communities to do this algorithmically, transparently and equitably, with any fungible blockchain asset.
> 
> And it goes way beyond equity and corporate shares. These tools could support new revenue and business models for emergent open source projects, nonprofits, and other public goods producing endeavours. Millennials are maturing and their values are starting to influence finance, and they need a livable planet before they need ever-increasing financial returns. If they could park their savings directly in planting trees or cleaning up trash in order to see and measure ‘returns’ in ecosystem health, rather than speculating in blue-chip ‘business-as-usual’ stocks, they just might! As a society facing the existential crisis of climate change, we need to be able to put our money where our mouths are — and fast. I believe these tools could help us do just that.

### Matslats asks (sensibly) why would people basically donate money? And if they don't, aren't theyse just impact investments ... 

> **Matslats**: I think few people, even in blockchain, understand the degree to which we must reimagine wealth and finance — even money must be redefined in order for society to respond to climate change and mass extinction in a way that minimizes suffering and death. At a time when humanity should be ‘all hands on deck’ most of us are either working bullshit jobs to make the rich richer, or are unemployed because money is continuously syphoned out of the real economy. When you talk about Millennials ‘investing’ in planting trees and cleaning up trash, and seeking non-financial, ecological returns; that’s radical, but I find it hard to grasp.
> 
> What I can imagine is nonprofit organisations doing the equivalent of issuing bonds in a less onerous and more experimental way than is possible for them in mainstream finance. I could imagine buying MyNGO tokens, and the NGO investing the money to generate a return which goes, some to me, and some to their own activities. Then when I need the money out, I could hopefully sell the tokens at face value.

Ed: but wait a moment isn't this just impact investing. All you have as a differnce is the lack of regulation (the "less onerous and more experimental way") but that's a very dubious benefit -- and one that is not likely sustainable.

## Introducing the Commons Market Maker

### Commons Market Maker

> That brings us to the last concept I want to introduce, as a particular type of PAMM that is geared towards continuous funding for public goods — sorry but it’s yet another acronym. Projects like the Commons Stack are setting up PAMMs with an additional spending account which they call the ‘Common Pool’ (because it’s a Common Pool Resource that is collectively allocated towards community goals). This configuration is being called a **Commons Market Maker (CMM).** According to David Bollier, a “commons” is the combination of three things: a community, its shared resources, and the rules by which those resources can be used.
>
> The CMM can be considered a new tool which accumulates and manages the hard asset (money) in the Common Pool. It also defines the community (which is the token holders) that can access the money and defines the rules about how the money can be spent (via [continuous voting](https://medium.com/giveth/conviction-voting-a-novel-continuous-decision-making-alternative-to-governance-aa746cfb9475) enabled by smart contract logic).
>
![](https://miro.medium.com/max/1400/1*cxIlu0ENo0JDOt6j0A2Hiw.gif)
>
> So how would this work in practice? A community of individuals come together and decide to mutually invest in their commons. They place their money into a pool and a Commons Market Maker issues them tokens. The CMM then allocates a certain proportion of those funds into a reserve fund (essentially a fractional reserve system), with the remainder of those funds being used to initialize the Common Pool for discretionary spending by the community. The tokens that commoners now hold are used for voting over how the Common Pool funds are spent.
>
> The CMM continuously funds the Common Pool by imposing entry fees for issuing tokens and/or exit fees for redeeming tokens. This has the added benefit of deterring speculators with extra transaction fees, and ensures that the community benefits from any speculation that does happen. 

There is the crucial line:

> A community of individuals come together and decide to mutually invest in their commons

But what about free-riding? And if free-riding isn't a problem why do need the blockchain and a dozen acronyms? What inefficiency is the blockchain solving exactly?

And then there is the secondary claim:

> The CMM continuously funds the Common Pool by imposing entry fees for issuing tokens and/or exit fees for redeeming tokens. 

Which again seems very dubious: transaction fees seem far too little to fund the commons. The main money has to come from actual token purchase.


### These tools are truly verging on new ways of collectively putting our money where our values are

> Jeff: Although it could look like a fad due to the hype cycles around crypto, I think these tools are truly verging on new ways of collectively putting our money where our values are.

How? How does it enable this in ways that say market democracy does not? Why cannot I today allocate money to my values? or have the state do so via democratic voting?

He continues:

> It’s also doing that alongside new granularity and subsidiarity in decision making, and I think that’s fundamentally important. In a future world your regular choice of investments could include a "climateDAO" that funded emergent climate solutions, or "hungerDAO" that fed the hungry, or even "neighbourDAO" that supported your community. If you are bullish on Tesla stocks, wait ’til you see the latent demand for investments that directly support emergent regenerative practices on a global scale! (Of course, we are a ways off from that yet.)

We have had participatory voting etc for a long time. There are fundamental challenges re scaling why we don't do participatory budgeting at society level or why liquid democracy has generally been an abject failure. In short: making choices between large number of complex options (budgeting in a modern state) requires detailed expertise and a substantial long-running process. This is not something that most of us have the time or expertise to do. Hence we delegate it to people: our elected representatives together with a (hopefully) expert set of managers (the bureaucracy).

More oddly this sounds much like a utopia of libertarian right-wingers where everything is funded by voluntary donations of the rich and powerful and basic services depend on their largesse and goodwill:

> In a future world your regular choice of investments could include a "climateDAO" that funded emergent climate solutions, or "hungerDAO" that fed the hungry, or even "neighbourDAO" that supported your community.

### We don't need to question that investment capital will flow into these tools

Really?

> With trends suggesting further growth of these kinds of digital cooperative organizations, I don’t think we need to question whether there will be more investment capital flowing through these tools.

And then there's a slight bizarre "heads we win, tails you lose" point:

> The true test will be in whether the early organizations who use them can successfully work through their challenges to deliver #RealValue. If so, more experiments will come. If not, more will probably come anyway — we are likely to see a lot of failures along the path of progress too, and that shouldn’t stop us from continuing to iterate these tools until they’re useful.

## Closing out

### Matthew Slater remains pretty sceptical

> **Matthew Slater:** I started this process trying to unpack a lot of your language and translated it into universal financial concepts and I think we’ve made some progress with this. **I still have many concerns that new and repurposed language is being used to cover up for poorly designed financial mechanics and merely give the impression of innovation without real value underneath.** Given the growth of the crypto field in the last decade, it must be very tempting for people to overestimate their cleverness, and to mistake financial engineering for wealth creation. I certainly see potential in the new tools in giving power to nonprofits and reclaimed commons, but until the language and mechanisms are more comprehensible, I have trouble seeing this take off.