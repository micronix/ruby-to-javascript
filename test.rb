puts "hello world"

# this is a comment

a = 10 # integer
b = 3.14 # float
c = true # boolean
d = "this is a string" # string
e = 'this is another string' # string

if a > 5
    puts "hello"
else
    puts "other"
end

a = [1,2,4] # define array
a << 6 # add 6 to the array
a.push(6) # also works

# access item at second position in array
puts a[1]

# prints all elements in array a
a.each do |e|
    puts e
end

h = {}
h['a'] = 10 # the key is 'a' the value is 10
puts h['a'] # will access the value 10 and print 10
puts h.a # error


def foo
    puts "inside foo"
end

foo # also can be called by foo()

def bar(a, b)
    puts a, b
end