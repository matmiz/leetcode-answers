/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * n - the length of the first linked list
 * m - the length of the second linked list
 * 
 * Runtime: O(max(n,m))
 * Space complexity: O(max(n,m))
 * 
 */
var addTwoNumbers = function(l1, l2) {
    let digit1,digit2,result,answer='', carry=0;
    //go over the lists until one of them ends
    while(l1 && l2) {
        digit1 = l1.val;
        digit2 = l2.val
        result = digit1+digit2+carry;
        if(result > 9) {
            result -= 10;
            carry = 1;
        }
        else {
            carry = 0;
        }
        answer+=result;
        l1 = l1.next;
        l2 = l2.next;
    }
    let longerNum = l1 || l2;
    //if there's a carry left, add it to the answer
    if(carry) {
        while(longerNum && carry) {
            result = longerNum.val + 1;
            if(result > 9) {
                result -= 10;
            }
            else {
                carry = 0;
            }
            answer+=result;
            longerNum = longerNum.next;
        }
        if(carry) {
            answer+='1';
        }
    }
    //if there's still remaining digits
    while(longerNum) {
        answer+=longerNum.val;
        longerNum = longerNum.next;
    }
    
    //create the ListNode answer
    let i=1;
    let listNodeAnswer = new ListNode(answer[0]);
    let listNodeAnswerHead = listNodeAnswer;
    while(i < answer.length) {
        listNodeAnswer.next = new ListNode(answer[i++]);
        listNodeAnswer = listNodeAnswer.next;
    }
    return listNodeAnswerHead;
    
};
