/**
 * runtime: O(n) when n is the size of the list
 * space: O(1) 
 */
var swapPairs = function(head) {
    let currentNode;
    let node = head;
    let prevNode = null;
    let nextCurrent = node && node.next && node.next.next;
    if(!node || !node.next) {
        return head;
    }
    head = node.next;
    while(node && node.next) {
        currentNode = node;
        nextCurrent = currentNode.next;
    
        if(prevNode) {
            prevNode.next = nextCurrent;
        }
        currentNode.next = nextCurrent && nextCurrent.next;
        if(nextCurrent) {
            nextCurrent.next = currentNode;    
        }
        
        prevNode = node;
        node = node.next;
        
    }
    return head;
};