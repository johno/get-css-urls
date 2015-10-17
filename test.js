import test from 'ava'
import isBlank from 'is-blank'
import getCssUrls from './'

test('gets css urls', t => {
  t.plan(1)

  t.same(
    getCssUrls("url(foo.css) lksjhlksjhdf url(bar.css)"),
    ["url(foo.css)", "url(bar.css)"]
  )
})

test('does not get nonexistent urls', t => {
  t.plan(1)

  t.ok(isBlank(getCssUrls('(foo.css) lksjhlksjhdf')))
})
