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


## Sande, A. V. de. (2018, August 28). Sponsored Burning for TCR. _Medium_. 

https://avsa.medium.com/sponsored-burning-for-tcr-c0ab08eef9d4

One note: the whole thesis of this article looks like an elaborate presentation of what is simply selling advertising on a curate list for money -- but dressing it up with tokens!

There's an analogy here for me with knot theory and working out whether something is the null knot. If you dress up a basic economic idea in enough jargon and add enough convolutions it can seem novel. But underneath it is still the same basic economic idea. There's no innovation there.

### Normal bonding curves are zero-sum and look like a [pyramid-scheme](../concepts/pyramid-scheme.md) or [pump-and-dump](../concepts/pump-and-dump.md)

> The assumption of the bonding curve is that the total supply of tokens always equate the funds held, therefore if everyone sold all tokens, the total amount of money going in would be equal to the amount of money going out. The distribution of money for each participant would be different, depending on when they got in and out, **which makes the whole system a zero-sum game that rewards those who got in early and got out at the top,** making it very similar to a pyramid, or a “pump and dump” scheme in which all profit comes at expense of new members.

Note the:

> making it very similar to a pyramid scheme

# TODO

* [ ] Augmented bonded curves (I think these are just bonding curves with some version of an ICO aka "hatch" phase added to the front)