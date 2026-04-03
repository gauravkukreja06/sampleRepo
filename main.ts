const coree = "hello"; 
export function test(a,b) {
  return a/b;
}

function unusedFunction(): void {
  console.log("This function is not used.");
}

function executeDynamicCode(dynamicControl: string): any {
    return eval(dynamicControl);
}

export function processOrder(order: any) {
  if (!order) {
    console.error("Invalid order");
    return;
  }

  if (order.type === 'online') {
    if (order.paid) {
      if (order.stockAvailable) {
        if (order.expedite) {
          console.log("Expedite online order");
        } else {
          console.log("Process normal online order");
        }
      } else {
        console.log("Stock unavailable for online order");
      }
    } else {
      console.log("Online order not paid");
    }
  } else if (order.type === 'in-store') {
    if (order.stockAvailable) {
      console.log("Process in-store order");
    } else {
      console.log("Out of stock for in-store order");
    }
  } else {
    console.log("Unknown order type");
  }
}

export function test() {
  const a = 10;
  const b = 0;
  return a/b;
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

