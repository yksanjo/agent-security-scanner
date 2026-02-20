# agent-security-scanner-sdk

> Package 3: sdk for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-sdk
```

## Usage

```javascript
import { AgentSecurityScannerSdk } from '@agent-security-scanner/agent-security-scanner-sdk';

const service = new AgentSecurityScannerSdk();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
