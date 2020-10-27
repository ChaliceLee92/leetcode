const preorderTraversal = root => {
	const res = [];
	let stack = [];
	while (root) {
		res.push(root.val);
		if (root.right) stack.push(root.right);
		root = root.left;
	}

	while (stack.length) {
		root = stack.pop();
    res.push(root.val);
		if (root.right) stack.push(root.right);
    root = root.left;
    while (root) {
			res.push(root.val);
			if (root.right) stack.push(root.right);
			root = root.left;
		}
	}
	return res;
};

const root = {
	val: 1,
	left: null,
	right: {
		val: 2,
		left: { val: 3, left: null, right: null },
		right: null,
	},
};

const res = preorderTraversal(root);
