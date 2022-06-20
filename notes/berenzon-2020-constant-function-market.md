# Notes on Constant Function Market Makers: DeFi’s “Zero to One” Innovation

> ## Drawbacks of Constant Function Market Makers
> 
> ### **Slippage**
> 
> Slippage refers to the tendency of prices to move against a trader’s actions as the trader absorbs liquidity — the larger the trade, the greater the slippage. CFMMs incur large slippage costs and are thus better for smaller order sizes.
> 
> ### Exotic financial risk
> 
> Adding liquidity to a CFMM is simple but comes with some complex financial risks ([impermanent loss](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2), short volatility, long volatility/volume correlation, etc.).
> 
> For example, the Uniswap payoff curve is concave, meaning that liquidity providers are profitable within a certain price bound and will lose money in large price movements:
>
![](../assets/Pasted%20image%2020220620230247.png)

> Ideally, we want “[convexity](https://en.wikipedia.org/wiki/Convex_function)” when taking risk, which means having upside on both sides of the risk spectrum. This payoff structure suggests that liquidity providers should be actively monitoring changes in the liquidity pool and acting on changes quickly to prevent significant losses.

Ed: this is a crucial point. This setup is basically risk-on. As volatility increases in the market risk of loss goes up for liquidity providers => people remove funds from pool => reduced liquidity => more volatility. This could potentially be a vicious cycle.

This whole section may point to reasons why traditional exchanges have never used AMMs. After all, it is not like AMMs are super sophisticated or complex - there is surely a reason why people haven't done this a lot before. And i suspect there are some very good ones!