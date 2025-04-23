class promise2 {
    constructor(fn) {
        
        
        this.resolve = null; // Initialize resolve
        fn(() => {
            
            if (this.resolve) {
               
                this.resolve();
            }
        });
    }

    then(callback) {
        
        this.resolve = callback;
        
    }
}

// Usage:
console.log("Promise started!");
let p = new promise2((resolve) => {
    setTimeout(() => {
        
        console.log(`before ${resolve}`);
        resolve();
    }, 1000);
});

p.then(() => {
    console.log("Promise resolved!");
});
