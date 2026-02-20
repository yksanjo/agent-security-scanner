# agent-security-scanner-webhook

> Integration: webhook for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-webhook
```

## Usage

```javascript
import { AgentSecurityScannerWebhook } from '@agent-security-scanner/agent-security-scanner-webhook';

const service = new AgentSecurityScannerWebhook();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
