# agent-security-scanner-scheduler

> Service: scheduler for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-scheduler
```

## Usage

```javascript
import { AgentSecurityScannerScheduler } from '@agent-security-scanner/agent-security-scanner-scheduler';

const service = new AgentSecurityScannerScheduler();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
