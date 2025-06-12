const coree = "hello"; 
export function test(a,b) {
  return a/b;
}

function unusedFunction(): void {
  console.log("This function is not used.");
}

function calculateTotalPrice(price: number, quantity: number): number {
  const taxRate = 0.1;
  const subtotal = price * quantity;
  const total = subtotal * (1 + taxRate);
  return total;
}

function calculateOrderTotal(itemPrice: number, itemQuantity: number): number {
  const taxRate = 0.1; // Duplicated tax rate
  const subtotal = itemPrice * itemQuantity;
  const total = subtotal * (1 + taxRate);
  return total;
}

async function getUserAndDisplay(userId: number): Promise<void> {
  const userData = await fetchUserData(userId); 
  if (userData) {
    console.log(`User found: ${userData.name}`);
  } else {
    console.log("User not found.");
  }
}

async function fetchUserData(userId: number): Promise<UserData | undefined> {
  const data = await apiService.getUser(userId);
  return { id: data.userId, name: data.name, role: data.role };
}

interface UserData {
  id: number;
  name: string;
  role: string;
}

