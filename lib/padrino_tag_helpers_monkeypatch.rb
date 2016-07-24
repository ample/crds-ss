module Padrino
  module Helpers
    module TagHelpers

      IMGIX_ATTRS = [ 'ix-path' ].freeze;

      def nested_values(attribute, hash)
        hash.inject('') do |all,(key,value)|
          attribute_with_name = "#{attribute}-#{key.to_s.dasherize}"
          all << if value.is_a?(Hash)
            nested_values(attribute_with_name, value)

          # Don't escape any imgix attributes
          elsif IMGIX_ATTRS.include?(attribute_with_name)
            %(#{attribute_with_name}="#{escape_javascript(value)}" )

          else
            %(#{attribute_with_name}="#{escape_value(value)}" )
          end
        end
      end

    end
  end
end
