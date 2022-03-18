---
aliases: Automated Market Maker
---

# AMM - Automated Market Maker

Automated Market Maker i.e. an algorithmic platform for trading.

From https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm:

> You could think of an automated market maker as a robot that’s always willing to quote you a price between two assets. Some use a simple formula like Uniswap, while Curve, Balancer and others use more complicated ones.
>
> Not only can you trade trustlessly using an AMM, but you can also become the house by providing liquidity to a liquidity pool. This allows essentially anyone to become a market maker on an exchange and earn fees for providing liquidity.
> 
> AMMs have really carved out their niche in the DeFi space due to how simple and easy they are to use. Decentralizing market making this way is intrinsic to the vision of crypto.

## Examples

* Uniswap
* SushiSwap
* Curve Finance
* Astroport

### Uniswap

Summary

* [[Liquidity Providers]] (LPs) deposits tokens pairs e.g. ETH + some other token into a pool for trades of that pair
* LPs get paid 0.3% of each trade
* Current ratio in the pool determins the "theoretical" price. E.g. if 1 ETH and 100 OTHER then price is 1:100
* Slippage i.e. the actual price is determined by formula $x * y = k$ where $k$ is a constant and $x$ and $y$ are numbers of tokens of each type in the pool. Simply put you are getting the price that would exist after the trade once the tokens you are offering are added to the pool and tokens you are buying are removed from the pool ...

From https://academy.binance.com/en/articles/what-is-uniswap-and-how-does-it-work

> Automated market makers are [smart-contracts](smart-contracts.md) that hold [liquidity](liquidity.md) reserves (or liquidity pools) that traders can trade against. These reserves are funded by liquidity providers. Anyone can be a liquidity provider who deposits an equivalent value of two tokens in the pool. In return, traders pay a fee to the pool that is then distributed to liquidity providers according to their share of the pool. Let’s dive into how this works in more detail.

Uniswap is iterating to favor "professional players":

> One of the most significant changes coming with Uniswap v3 relates to capital efficiency. You see, most AMMs are very capital inefficient – that is, most of the funds sitting in them at any given moment are not being used. This is due to an inherent characteristic of this $x*y=k$ model discussed earlier. In a simplified way, the more liquidity there is in the pool, the bigger orders the system can support in a larger price range.
> 
> However, liquidity providers (LPs) in these pools essentially provide liquidity for a price curve (range) between 0 and infinity. All that capital is sitting there reserved for the scenario when one of the assets in the pool 5x-s, 10x-s, 100x-s.
> 
> If that happens, those idle assets ensure that there’s still liquidity left on that part of the price curve. This means that only a small portion of the liquidity in the pool is sitting where most of the trading happens.
> 
> As an example, Uniswap currently has about 5B dollars of liquidity locked, while it does only about 1B of volume per day. You might think this isn’t a particularly elegant way of doing things, and it appears that the Uniswap team agrees. Uniswap v3 addresses this issue.
> 
> Liquidity providers can now set custom price ranges for which they want to provide liquidity for. This should lead to more concentrated liquidity in the price range that most trading activity happens in.
> 
> In some sense, Uniswap v3 is a rudimentary way of creating an on-chain order book on Ethereum, where market makers can decide to provide liquidity in the price ranges they set. It’s worth noting that this change favors professional market makers over retail participants. The beauty of AMMs is that anyone can provide liquidity and put their funds to work.
> 
> However, with this additional layer of complexity, “lazy” LPs are going to earn much less in trading fees than professional players who can constantly keep optimizing their strategy.

## References

* https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm
* https://twitter.com/HideNotSlide/status/1386358389240958977 - someone getting excited about not having transparent market makers as if this is something innovative but what about e.g. https://en.wikipedia.org/wiki/IEX
* https://www.bis.org/publ/qtrpdf/r_qt2112v.htm - good brief overview from BIS. Note interesting footnote (no 2):
  §
  > The AMM trading mechanism shares similarities with the framework of Shapley and Shubik (1977), which ensures market-clearing. See L Shapley and M Shubik, "Trade using one commodity as a means of payment", Journal of Political Economy, vol 85, no 5, pp. 937–68, and H S Shin, "Comparing the robustness of trading systems to higher-order uncertainty", Review of Economic Studies, vol 63, no 1, pp. 39–59.
