const address = '0x4730fB1463A6F1F44AEB45F6c5c422427f37F4D0';
const ABI = [{
    'constant': false,
    'inputs': [{'name': '_from', 'type': 'address[]'}, {
        'name': '_to',
        'type': 'address[]'
    }, {'name': '_values', 'type': 'uint256[]'}, {
        'name': '_fees',
        'type': 'uint256[]'
    }, {'name': '_nonces', 'type': 'uint256[]'}, {
        'name': '_v',
        'type': 'uint8[]'
    }, {'name': '_r', 'type': 'bytes32[]'}, {
        'name': '_s',
        'type': 'bytes32[]'
    }],
    'name': 'transferPreSignedBulk',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'mintingFinished',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [{'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_spender', 'type': 'address'}, {
        'name': '_value',
        'type': 'uint256'
    }],
    'name': 'approve',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_calcHash',
        'type': 'bytes32'
    }],
    'name': 'isTransactionAlreadySettled',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_to',
        'type': 'address'
    }, {'name': '_value', 'type': 'uint256'}],
    'name': 'transferFrom',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'cap',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'unpause',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_to', 'type': 'address'}, {
        'name': '_amount',
        'type': 'uint256'
    }],
    'name': 'mint',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'paused',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{
        'name': '_spender',
        'type': 'address'
    }, {'name': '_subtractedValue', 'type': 'uint256'}],
    'name': 'decreaseApproval',
    'outputs': [{'name': 'success', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_owner', 'type': 'address'}],
    'name': 'balanceOf',
    'outputs': [{'name': 'balance', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'finishMinting',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_signer', 'type': 'address'}, {
        'name': '_hash',
        'type': 'bytes32'
    }, {'name': '_v', 'type': 'uint8'}, {
        'name': '_r',
        'type': 'bytes32'
    }, {'name': '_s', 'type': 'bytes32'}],
    'name': 'isValidSignature',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [],
    'name': 'pause',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [{'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [{'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_to',
        'type': 'address'
    }, {'name': '_value', 'type': 'uint256'}, {
        'name': '_fee',
        'type': 'uint256'
    }, {'name': '_nonce', 'type': 'uint256'}],
    'name': 'calculateHash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_tos',
        'type': 'address[]'
    }, {'name': '_values', 'type': 'uint256[]'}, {
        'name': '_fee',
        'type': 'uint256'
    }, {'name': '_nonce', 'type': 'uint256'}, {
        'name': '_v',
        'type': 'uint8'
    }, {'name': '_r', 'type': 'bytes32'}, {'name': '_s', 'type': 'bytes32'}],
    'name': 'transferPreSignedMany',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_to', 'type': 'address'}, {
        'name': '_value',
        'type': 'uint256'
    }],
    'name': 'transfer',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_erc20', 'type': 'address'}, {
        'name': '_amount',
        'type': 'uint256'
    }],
    'name': 'recoverERC20Tokens',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_tos',
        'type': 'address[]'
    }, {'name': '_values', 'type': 'uint256[]'}, {
        'name': '_fee',
        'type': 'uint256'
    }, {'name': '_nonce', 'type': 'uint256'}],
    'name': 'calculateManyHash',
    'outputs': [{'name': '', 'type': 'bytes32'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [],
    'name': 'maxSupply',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_spender', 'type': 'address'}, {
        'name': '_addedValue',
        'type': 'uint256'
    }],
    'name': 'increaseApproval',
    'outputs': [{'name': 'success', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': true,
    'inputs': [{'name': '_owner', 'type': 'address'}, {
        'name': '_spender',
        'type': 'address'
    }],
    'name': 'allowance',
    'outputs': [{'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': '_from', 'type': 'address'}, {
        'name': '_to',
        'type': 'address'
    }, {'name': '_value', 'type': 'uint256'}, {
        'name': '_fee',
        'type': 'uint256'
    }, {'name': '_nonce', 'type': 'uint256'}, {
        'name': '_v',
        'type': 'uint8'
    }, {'name': '_r', 'type': 'bytes32'}, {'name': '_s', 'type': 'bytes32'}],
    'name': 'transferPreSigned',
    'outputs': [{'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'constant': false,
    'inputs': [{'name': 'newOwner', 'type': 'address'}],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
}, {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
}, {
    'anonymous': false,
    'inputs': [],
    'name': 'Pause',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [],
    'name': 'Unpause',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'to',
        'type': 'address'
    }, {'indexed': false, 'name': 'amount', 'type': 'uint256'}],
    'name': 'Mint',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [],
    'name': 'MintFinished',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'previousOwner',
        'type': 'address'
    }, {'indexed': true, 'name': 'newOwner', 'type': 'address'}],
    'name': 'OwnershipTransferred',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'from',
        'type': 'address'
    }, {'indexed': true, 'name': 'to', 'type': 'address'}, {
        'indexed': true,
        'name': 'settler',
        'type': 'address'
    }, {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
    }, {'indexed': false, 'name': 'fee', 'type': 'uint256'}],
    'name': 'TransferPreSigned',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'from',
        'type': 'address'
    }, {
        'indexed': true,
        'name': 'settler',
        'type': 'address'
    }, {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
    }, {'indexed': false, 'name': 'fee', 'type': 'uint256'}],
    'name': 'TransferPreSignedMany',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'from',
        'type': 'address'
    }, {'indexed': true, 'name': 'to', 'type': 'address'}, {
        'indexed': false,
        'name': 'value',
        'type': 'uint256'
    }],
    'name': 'Transfer',
    'type': 'event'
}, {
    'anonymous': false,
    'inputs': [{
        'indexed': true,
        'name': 'owner',
        'type': 'address'
    }, {
        'indexed': true,
        'name': 'spender',
        'type': 'address'
    }, {'indexed': false, 'name': 'value', 'type': 'uint256'}],
    'name': 'Approval',
    'type': 'event'
}];

export {address, ABI}
