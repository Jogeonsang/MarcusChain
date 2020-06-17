import * as CryptoJS from 'crypto-js';

class Block {
    static calculateBlockHash = (index: number, previousHash: string, timeStamp: number, data: string):string =>
        CryptoJS.SHA256(index + timeStamp + timeStamp + data).toString();

    static validationStructure = (aBlock: Block): boolean => {
        return typeof aBlock.index === "number" &&
            typeof aBlock.hash === 'string' &&
            typeof aBlock.previousHash === 'string' &&
            typeof aBlock.timeStamp === 'number' &&
            typeof aBlock.data === 'string';
    };

    constructor(index: number, hash: string, previousHash: string, data: string, timeStamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    };

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;
};

const genesisBlock: Block = new Block(0, '2002020202020', '', 'hello', 123456);

let blockChain: [Block] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLatestBlock = () :Block => blockChain[blockChain.length -1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);

    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    return newBlock;
};

const getHashForBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timeStamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
    if(!Block.validationStructure(candidateBlock)) {
        return false
    } else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false
    } else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    } else {
        return true
    }
};

const addBlock = (candidateBlock: Block): void => {
    if(isBlockValid(candidateBlock, getLatestBlock())) {
        blockChain.push(candidateBlock);
    }
}

export {}
