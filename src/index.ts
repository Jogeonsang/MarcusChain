class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;
    constructor(index: number, hash: string, previousHash: string, data: string, timeStamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    };
};

const genesisBlock: Block = new Block(0, '2002020202020', '', 'hello', 123456);

let blockChain: [Block] = [genesisBlock];

console.log(blockChain);

export {}
