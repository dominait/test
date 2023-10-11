 

def video(param)
    type = param
    fieldType = case type
    when 1
      field('javascript')
    when 2
        field('graphql')
    when 3
        field('python')
    when 4
        field('react')
    else
      "unknown"
  end
   return fieldType
   end


 