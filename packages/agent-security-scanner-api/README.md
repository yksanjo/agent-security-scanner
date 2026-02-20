# agent-security-scanner-api

> Package 2: api for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-api
```

## Usage

```javascript
import { AgentSecurityScannerApi } from '@agent-security-scanner/agent-security-scanner-api';

const service = new AgentSecurityScannerApi();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
