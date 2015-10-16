import test from 'ava'
import isBlank from 'is-blank'
import getCssUrls from './'

test(t => {
  t.plan(2)

  t.same(
    getCssUrls("url(foo.css) lksjhlksjhdf url(bar.css)"),
    ["url(foo.css)", "url(bar.css)"]
  )

  t.ok(isBlank(getCssUrls('(foo.css) lksjhlksjhdf'))
})
