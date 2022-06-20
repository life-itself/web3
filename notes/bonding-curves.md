# Bonding Curves

In essence a bonding curve is just an algorithm for issuing tokens (ie. equity) over time at a varying price. Usually price goes up (or, equivalently number of tokens issues for given bitcoin/ether etc goes down).

# Notes

## Bonding Curves In Depth: Intuition & Parametrization (Dec 13 2018)

https://blog.relevant.community/bonding-curves-in-depth-intuition-parametrization-d3905a681e0a - 

I love this quote early on:

> Bonding curves are a great tool for designing incentive mechanisms. At its essence, a bonding curve is a way to incentivize early adopters — those buying in at the bottom of the curve. **Of course if there is no intrinsic value to the bonded token, the bonding curve may be a pyramid scheme and is more susceptible to manipulation.** [emphasis added]

He continues

> For a bonded token to have intrinsic value it should entitle the holder to some future cash flows. If that’s the case, we can easily compute the present value of the tokens as the sum of all future cash flows. Once we know how much a token is worth, it becomes harder to manipulate its price.
>
> For example, if you are purchasing tokens of a [continuous organization](https://hackernoon.com/introducing-continuous-organizations-22ad9d1f63b7) (sort of like buying equity in a traditional corporation), and the token entitles you to a portion of future cash flows of that organization, you’ll be able to estimate the token’s present value. If you are able to observe when the bonded token is overpriced, it will be harder for attackers to execute a pump and dump. If, on the other hand, we create a bonding curve and attach it to a meme without any promise of future cash flows, we’ll have a much harder time reasoning about the fair price of the bonded token. In this case the bonding curve is easier to manipulate and is much more like a gambling game.

# TODO

* [ ] Augmented bonded curves