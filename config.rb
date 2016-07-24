require "lib/padrino_tag_helpers_monkeypatch"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
end

helpers do
  def imgix_tag(path, **options)
    dir = 'content/images/second-screen'
    tag :img, options.merge(ix: { path: "#{dir}/#{path}" })
  end
end
