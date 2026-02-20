# agent-security-scanner-analyzer

> Service: analyzer for AI Security Scanner

## Installation

```bash
npm install @agent-security-scanner/agent-security-scanner-analyzer
```

## Usage

```javascript
import { AgentSecurityScannerAnalyzer } from '@agent-security-scanner/agent-security-scanner-analyzer';

const service = new AgentSecurityScannerAnalyzer();
await service.init();
const result = await service.execute({ data: 'test' });
```

## API

- `init()` - Initialize the service
- `execute(input)` - Execute the service
- `health()` - Health check

## License

MIT
