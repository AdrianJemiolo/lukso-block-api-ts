import { NextResponse } from "next/server";
import fetch from "node-fetch";

const LUKSO_RPC = "https://rpc.testnet.lukso.network";

interface RpcResponse {
  result: string;
}

export async function GET() {
  try {
    const response = await fetch(LUKSO_RPC, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 1,
      }),
    });

    const data = (await response.json()) as RpcResponse;

    return NextResponse.json({ blockNumber: parseInt(data.result, 16) });
  } catch (error: unknown) {
    console.error("Error fetching block number:", error);

    return NextResponse.json(
      { error: `Failed to fetch block number: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
