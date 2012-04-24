# A jQuery Parallax plugin from The Farm

Plugin for changing the background-position of elements related to the users scrolling. If if finds a way to animate the background-position it will use [`.animate()`](http://api.jquery.com/animate/) over [`.css()`](http://api.jquery.com/css/).

## Options

* `start`

	> A `functions` that returns a `boolean` which represents if the parallax should be going or not. First parameter is the element and the second is an [`.offset()`](http://api.jquery.com/animate/) object. Both start and stop needs to return true for the paralax to animate.

* `stop`

	> A `functions` that returns a `boolean` which represents if the parallax should be going or not. First parameter is the element and the second is an [`.offset()`](http://api.jquery.com/animate/) object. Both start and stop needs to return true for the paralax to animate.

* `xCoeff`

	> The multiplyer for the horizontal parallax

* `yCoeff`

	> The multiplyer for the vertical parallax effect

* `xOffset`

	> The horizontal offset (in pixels without unit)

* `yOffset`

	> The vertical offset (in pixels without unit)

* `xUnit`

	> The unit that should be used when setting the horizontal background position

* `yUnit`

	> The unit that should be used when setting the vertical background position

* `xMinValue`

	> Either `false` or the lowest allowed value (in pixels without unit) for the horizontal background position

* `yMinValue`

	> Either `false` or the lowest allowed value (in pixels without unit) for the vertical background position
