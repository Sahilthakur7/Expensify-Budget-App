const add = (a,b) => a+b;

const generateGreeting = (name) => {
    return `Hello ${name}`
}

test('should add two numbers', ()=> {
    const result = add(3,4);
    
    expect(result).toBe(7);
});

test('should give proper greeting', () => {
    const greeting = generateGreeting("Mota");

    expect(greeting).toBe("Hello Mota");
})
